#!/usr/bin/env node
// MCP-Server "postfach" (stdio, ohne Abhängigkeiten) für den E-Mail-Manager.
//
// Kann:   Ordner auflisten, Mails auflisten/suchen, Mails lesen, Entwürfe im Entwürfe-Ordner ablegen.
// Kann NICHT – bewusst nicht eingebaut: senden (kein SMTP), antworten, weiterleiten, löschen,
//          verschieben, Markierungen ändern. Postfächer werden nur lesend geöffnet (EXAMINE,
//          BODY.PEEK – Mails bleiben ungelesen). Einzige schreibende Aktion: APPEND einer neuen
//          Nachricht mit Kennzeichen \Draft in den Entwürfe-Ordner.
//
// Konfiguration über Umgebungsvariablen (nie ins Repository schreiben):
//   EMAIL_IMAP_HOST, EMAIL_IMAP_PORT (Standard 993), EMAIL_USER, EMAIL_PASSWORD (App-Passwort),
//   optional EMAIL_FROM ("Name <adresse>"), EMAIL_DRAFTS_FOLDER, EMAIL_IMAP_SICHERHEIT=klartext (nur localhost).
import { createInterface } from 'node:readline';
import tls from 'node:tls';
import net from 'node:net';
import { randomBytes } from 'node:crypto';

const CFG = {
  host: process.env.EMAIL_IMAP_HOST,
  port: Number(process.env.EMAIL_IMAP_PORT || 993),
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASSWORD,
  from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
  drafts: process.env.EMAIL_DRAFTS_FOLDER || '',
  klartext: process.env.EMAIL_IMAP_SICHERHEIT === 'klartext',
};
const MAX_TEXT = 30000;

// ---------------------------------------------------------------- IMAP-Verbindung
class Imap {
  constructor() { this.buf = Buffer.alloc(0); this.q = []; this.waiter = null; this.err = null; this.n = 0; }

  async open() {
    if (!CFG.host || !CFG.user || !CFG.pass) throw new Error('Postfach nicht konfiguriert: Bitte EMAIL_IMAP_HOST, EMAIL_USER und EMAIL_PASSWORD als Umgebungsvariablen/Secrets setzen (siehe postfach/README.md).');
    if (CFG.klartext && !['localhost', '127.0.0.1', '::1'].includes(CFG.host)) throw new Error('Unverschlüsselte Verbindung ist nur zu localhost erlaubt.');
    this.sock = await new Promise((res, rej) => {
      const s = CFG.klartext ? net.connect(CFG.port, CFG.host) : tls.connect({ host: CFG.host, port: CFG.port, servername: CFG.host });
      s.once(CFG.klartext ? 'connect' : 'secureConnect', () => res(s));
      s.once('error', rej);
    });
    this.sock.setTimeout(90_000, () => this.sock.destroy(new Error('Zeitüberschreitung bei der IMAP-Verbindung')));
    this.sock.on('data', d => { this.buf = Buffer.concat([this.buf, d]); this.pump(); });
    this.sock.on('error', e => this.fail(e));
    this.sock.on('close', () => this.fail(new Error('IMAP-Verbindung wurde geschlossen')));
    const hello = await this.read();
    if (!/^\* (OK|PREAUTH)/i.test(hello)) throw new Error('Unerwartete Begrüßung des IMAP-Servers: ' + hello.slice(0, 200));
    if (!/^\* PREAUTH/i.test(hello)) {
      try { await this.cmd('LOGIN ', astr(CFG.user), ' ', astr(CFG.pass)); }
      catch (e) { throw new Error(`Anmeldung fehlgeschlagen (${e.message}). Bei Gmail/GMX/web.de/T-Online meist ein App-Passwort bzw. aktivierter IMAP-Zugang nötig.`); }
    }
    return this;
  }

  async close() { try { await this.cmd('LOGOUT'); } catch {} this.sock?.destroy(); }

  // Liest eine vollständige Server-Antwort (eine Zeile inkl. eingebetteter Literale {n}).
  extract() {
    let pos = 0;
    for (;;) {
      const idx = this.buf.indexOf('\r\n', pos);
      if (idx < 0) return null;
      const m = /\{(\d+)\+?\}$/.exec(this.buf.toString('latin1', pos, idx));
      if (m) { const end = idx + 2 + Number(m[1]); if (this.buf.length < end) return null; pos = end; continue; }
      const line = this.buf.toString('latin1', 0, idx);
      this.buf = this.buf.subarray(idx + 2);
      return line;
    }
  }
  pump() { let r; while ((r = this.extract()) !== null) { if (this.waiter) { const w = this.waiter; this.waiter = null; w.res(r); } else this.q.push(r); } }
  fail(e) { this.err ||= e; if (this.waiter) { const w = this.waiter; this.waiter = null; w.rej(this.err); } }
  read() {
    if (this.q.length) return Promise.resolve(this.q.shift());
    if (this.err) return Promise.reject(this.err);
    return new Promise((res, rej) => { this.waiter = { res, rej }; });
  }

  // Teile: Strings werden direkt gesendet, Buffer als Literal {n} (mit Warten auf "+").
  async cmd(...parts) {
    const tag = 'A' + (++this.n);
    const untagged = [];
    const handle = r => {
      if (r.startsWith('* ')) { untagged.push(r.slice(2)); return null; }
      if (r.startsWith(tag + ' ')) {
        const rest = r.slice(tag.length + 1);
        if (!/^OK/i.test(rest)) throw new Error(rest.replace(/^(NO|BAD)\s*/i, '').slice(0, 300));
        return 'done';
      }
      return r.startsWith('+') ? 'cont' : null;
    };
    let out = tag + ' ';
    for (const p of parts) {
      if (!Buffer.isBuffer(p)) { out += p; continue; }
      this.sock.write(out + `{${p.length}}\r\n`);
      for (;;) { const s = handle(await this.read()); if (s === 'cont') break; if (s === 'done') throw new Error('Server hat das Literal nicht angenommen'); }
      this.sock.write(p);
      out = '';
    }
    this.sock.write(out + '\r\n');
    for (;;) { if (handle(await this.read()) === 'done') return untagged; }
  }
}

async function mitPostfach(fn) {
  const imap = await new Imap().open();
  try { return await fn(imap); } finally { await imap.close(); }
}

// ---------------------------------------------------------------- IMAP-Hilfen
const istAscii = s => /^[\x20-\x7e]*$/.test(s);
const quote = s => '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
const astr = s => (istAscii(s) ? quote(s) : Buffer.from(s, 'utf8'));
const keineZeilenumbrueche = (s, feld) => { if (/[\r\n]/.test(s)) throw new Error(`Ungültige Zeichen (Zeilenumbruch) in ${feld}`); return s; };

// Antwort-Tokenizer: Atome, "Strings", {n}-Literale, (Listen), NIL.
function parseImap(s) {
  const p = { s, i: 0 };
  const items = close => {
    const out = [];
    for (;;) {
      while (p.s[p.i] === ' ') p.i++;
      if (p.i >= p.s.length) return out;
      const c = p.s[p.i];
      if (c === close) { p.i++; return out; }
      if (c === '(') { p.i++; out.push(items(')')); continue; }
      if (c === '"') {
        let v = ''; p.i++;
        while (p.i < p.s.length && p.s[p.i] !== '"') { if (p.s[p.i] === '\\') p.i++; v += p.s[p.i++]; }
        p.i++; out.push(v); continue;
      }
      if (c === '{') {
        const m = /^\{(\d+)\+?\}\r\n/.exec(p.s.slice(p.i, p.i + 32));
        if (m) { const st = p.i + m[0].length, n = Number(m[1]); out.push(p.s.slice(st, st + n)); p.i = st + n; continue; }
      }
      let v = '', depth = 0;
      while (p.i < p.s.length) {
        const ch = p.s[p.i];
        if (depth === 0 && (ch === ' ' || ch === '(' || ch === ')')) break;
        if (ch === '[') depth++; else if (ch === ']') depth--;
        v += ch; p.i++;
      }
      if (v === '') { p.i++; continue; }
      out.push(v.toUpperCase() === 'NIL' ? null : v);
    }
  };
  return items(null);
}

function fetchErgebnisse(untagged) {
  const res = [];
  for (const line of untagged) {
    if (!/^\d+ FETCH /i.test(line)) continue;
    const [, , liste] = parseImap(line);
    const o = {};
    for (let i = 0; i + 1 < (liste || []).length; i += 2) {
      const k = String(liste[i]).toUpperCase();
      o[k.startsWith('BODY[') ? 'BODY' : k] = liste[i + 1];
    }
    res.push(o);
  }
  return res;
}

// Modified UTF-7 (RFC 3501) für Ordnernamen wie "Entwürfe".
function mutf7Decode(s) {
  return s.replace(/&([^-]*)-/g, (_, b) => {
    if (!b) return '&';
    const buf = Buffer.from(b.replace(/,/g, '/'), 'base64');
    let r = ''; for (let i = 0; i + 1 < buf.length; i += 2) r += String.fromCharCode(buf.readUInt16BE(i));
    return r;
  });
}
function mutf7Encode(s) {
  return s.replace(/&/g, '&-').replace(/[^\x20-\x7e]+/g, run => {
    const buf = Buffer.alloc(run.length * 2);
    for (let i = 0; i < run.length; i++) buf.writeUInt16BE(run.charCodeAt(i), i * 2);
    return '&' + buf.toString('base64').replace(/=+$/, '').replace(/\//g, ',') + '-';
  });
}
const mbox = name => quote(mutf7Encode(keineZeilenumbrueche(name, 'Ordnername')));

async function ordnerListe(imap) {
  const lines = await imap.cmd('LIST "" "*"');
  return lines.filter(l => /^LIST /i.test(l)).map(l => {
    const [, flags, , name] = parseImap(l);
    return { name: mutf7Decode(String(name ?? '')), flags: (flags || []).map(f => String(f).toLowerCase()) };
  });
}

async function entwuerfeOrdner(imap) {
  if (CFG.drafts) return CFG.drafts;
  const liste = await ordnerListe(imap);
  const sonder = liste.find(o => o.flags.includes('\\drafts'));
  if (sonder) return sonder.name;
  const name = liste.find(o => /(^|[./])(drafts|entwürfe|entwuerfe|entwurf)$/i.test(o.name));
  if (name) return name.name;
  throw new Error('Entwürfe-Ordner nicht gefunden. Bitte EMAIL_DRAFTS_FOLDER setzen (Ordnernamen mit "postfach_ordner" ermitteln).');
}

function imapDatum(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!m) throw new Error('Datum bitte als JJJJ-MM-TT angeben, z. B. 2026-11-01');
  const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Number(m[2]) - 1];
  if (!mon) throw new Error('Ungültiger Monat im Datum');
  return `${Number(m[3])}-${mon}-${m[1]}`;
}

// ---------------------------------------------------------------- MIME lesen
function zeichensatz(buf, cs) {
  const name = String(cs || '').trim().toLowerCase().replace(/^"|"$/g, '');
  if (name && !/^(us-ascii|ascii|utf-?8)$/.test(name)) {
    try { return new TextDecoder(name).decode(buf); } catch { /* unbekannt → unten */ }
  }
  try { return new TextDecoder('utf-8', { fatal: true }).decode(buf); } catch { return new TextDecoder('windows-1252').decode(buf); }
}

function kopfDekodieren(raw) {
  if (raw == null) return '';
  let s = /[\x80-\xff]/.test(raw) ? zeichensatz(Buffer.from(raw, 'latin1'), 'utf-8') : raw;
  s = s.replace(/(\?=)\s+(=\?)/g, '$1$2');
  return s.replace(/=\?([^?]+)\?([bBqQ])\?([^?]*)\?=/g, (_, cs, enc, t) => {
    const buf = enc.toUpperCase() === 'B'
      ? Buffer.from(t, 'base64')
      : Buffer.from(t.replace(/_/g, ' ').replace(/=([0-9A-Fa-f]{2})/g, (__, h) => String.fromCharCode(parseInt(h, 16))), 'latin1');
    return zeichensatz(buf, cs.split('*')[0]);
  });
}

function trenneKopfKoerper(raw) {
  const a = raw.indexOf('\r\n\r\n'), b = raw.indexOf('\n\n');
  if (a < 0 && b < 0) return [raw, ''];
  if (a >= 0 && (b < 0 || a < b)) return [raw.slice(0, a), raw.slice(a + 4)];
  return [raw.slice(0, b), raw.slice(b + 2)];
}

function kopfzeilen(h) {
  const m = new Map();
  for (const line of h.replace(/\r?\n[ \t]+/g, ' ').split(/\r?\n/)) {
    const i = line.indexOf(':'); if (i <= 0) continue;
    const k = line.slice(0, i).trim().toLowerCase();
    if (!m.has(k)) m.set(k, line.slice(i + 1).trim());
  }
  return m;
}

function parameter(v) {
  const teile = []; let cur = '', q = false;
  for (const ch of v || '') { if (ch === '"') q = !q; if (ch === ';' && !q) { teile.push(cur); cur = ''; } else cur += ch; }
  teile.push(cur);
  const wert = teile.shift().trim().toLowerCase();
  const params = {}, fortsetzung = {};
  for (const t of teile) {
    const i = t.indexOf('='); if (i < 0) continue;
    const key = t.slice(0, i).trim().toLowerCase();
    let val = t.slice(i + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1).replace(/\\(.)/g, '$1');
    const m = /^([^*]+)\*(?:(\d+)(\*)?)?$/.exec(key); // RFC 2231: name*, name*0, name*1*
    if (m) (fortsetzung[m[1]] ||= []).push({ idx: Number(m[2] || 0), val, enc: m[2] === undefined || !!m[3] });
    else params[key] = kopfDekodieren(val);
  }
  for (const [name, segs] of Object.entries(fortsetzung)) {
    segs.sort((x, y) => x.idx - y.idx);
    let cs = 'utf-8'; const bytes = [];
    segs.forEach((s, n) => {
      let v = s.val;
      if (s.enc && n === 0) { const m = /^([^']*)'[^']*'(.*)$/.exec(v); if (m) { cs = m[1] || cs; v = m[2]; } }
      if (s.enc) v = v.replace(/%([0-9A-Fa-f]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
      for (const ch of v) bytes.push(ch.charCodeAt(0) & 0xff);
    });
    params[name] = zeichensatz(Buffer.from(bytes), cs);
  }
  return { wert, params };
}

function koerperDekodieren(body, cte) {
  const enc = String(cte || '').trim().toLowerCase();
  if (enc === 'base64') return Buffer.from(body.replace(/[^A-Za-z0-9+/=]/g, ''), 'base64');
  if (enc === 'quoted-printable') {
    const s = body.replace(/=\r?\n/g, ''), out = Buffer.alloc(s.length); let n = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '=' && /^[0-9A-Fa-f]{2}$/.test(s.substr(i + 1, 2))) { out[n++] = parseInt(s.substr(i + 1, 2), 16); i += 2; }
      else out[n++] = s.charCodeAt(i) & 0xff;
    }
    return out.subarray(0, n);
  }
  return Buffer.from(body, 'latin1');
}

function teileMultipart(body, grenze) {
  const teile = []; let cur = null;
  for (const line of body.split(/\r?\n/)) {
    const t = line.trimEnd();
    if (t === '--' + grenze) { if (cur) teile.push(cur.join('\r\n')); cur = []; continue; }
    if (t === '--' + grenze + '--') { if (cur) teile.push(cur.join('\r\n')); cur = null; break; }
    if (cur) cur.push(line);
  }
  if (cur) teile.push(cur.join('\r\n'));
  return teile;
}

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', auml: 'ä', ouml: 'ö', uuml: 'ü', Auml: 'Ä', Ouml: 'Ö', Uuml: 'Ü', szlig: 'ß', euro: '€', ndash: '–', mdash: '—', hellip: '…', laquo: '«', raquo: '»', bdquo: '„', ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’', sbquo: '‚', copy: '©', reg: '®', trade: '™', eacute: 'é', egrave: 'è', agrave: 'à', bull: '•', middot: '·', shy: '', zwnj: '' };
function htmlZuText(html) {
  return html
    .replace(/<(script|style|head|title)\b[\s\S]*?<\/\1>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<a\b[^>]*?href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => {
      const txt = t.replace(/<[^>]+>/g, '').trim();
      return /^mailto:/i.test(href) || txt === href ? txt : `${txt} [Link: ${href}]`;
    })
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<li\b[^>]*>/gi, '\n• ')
    .replace(/<\/(p|div|tr|h[1-6]|li|blockquote|table|ul|ol)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => e[0] === '#'
      ? String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : Number(e.slice(1)))
      : (ENT[e] ?? m))
    .replace(/[ \t ]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function mimeLesen(raw, acc = { text: [], html: [], anhaenge: [] }, tiefe = 0) {
  const [h, body] = trenneKopfKoerper(raw);
  const kopf = kopfzeilen(h);
  const ct = parameter(kopf.get('content-type') || 'text/plain');
  const cd = parameter(kopf.get('content-disposition') || '');
  const typ = ct.wert || 'text/plain';
  if (typ.startsWith('multipart/') && ct.params.boundary && tiefe < 20) {
    for (const t of teileMultipart(body, ct.params.boundary)) mimeLesen(t, acc, tiefe + 1);
    return { kopf, ...acc };
  }
  const daten = koerperDekodieren(body, kopf.get('content-transfer-encoding'));
  const dateiname = cd.params.filename || ct.params.name;
  if (typ === 'message/rfc822') {
    const inner = kopfzeilen(trenneKopfKoerper(daten.toString('latin1'))[0]);
    acc.anhaenge.push(`Weitergeleitete E-Mail: „${kopfDekodieren(inner.get('subject'))}“ von ${kopfDekodieren(inner.get('from'))}`);
  } else if ((typ === 'text/plain' || typ === 'text/html') && cd.wert !== 'attachment' && !dateiname) {
    (typ === 'text/plain' ? acc.text : acc.html).push(zeichensatz(daten, ct.params.charset));
  } else {
    acc.anhaenge.push(`${dateiname || '(ohne Namen)'} (${typ}, ${groesse(daten.length)}${cd.wert === 'inline' ? ', eingebettet' : ''})`);
  }
  return { kopf, ...acc };
}

const groesse = n => (n < 1024 ? `${n} B` : n < 1048576 ? `${Math.round(n / 1024)} KB` : `${(n / 1048576).toFixed(1)} MB`);

function textAusMime(m) {
  const t = m.text.length ? m.text.join('\n\n') : htmlZuText(m.html.join('\n\n'));
  return t.replace(/\r\n/g, '\n').trim();
}

async function mailHolen(imap, ordner, uid) {
  if (!/^\d+$/.test(String(uid))) throw new Error('uid muss eine Zahl sein');
  await imap.cmd('EXAMINE ', mbox(ordner)); // nur lesend
  const [f] = fetchErgebnisse(await imap.cmd(`UID FETCH ${uid} (UID FLAGS BODY.PEEK[])`));
  if (!f || f.BODY == null) throw new Error(`Keine Mail mit UID ${uid} in „${ordner}“ gefunden.`);
  return { flags: (f.FLAGS || []).map(String), mime: mimeLesen(f.BODY) };
}

// ---------------------------------------------------------------- Entwürfe bauen
function kodiertesWort(s) {
  if (istAscii(s)) return s;
  const woerter = []; let cur = '';
  for (const ch of s) {
    if (Buffer.byteLength(cur + ch) > 45) { woerter.push(cur); cur = ''; }
    cur += ch;
  }
  woerter.push(cur);
  return woerter.map(w => `=?UTF-8?B?${Buffer.from(w).toString('base64')}?=`).join('\r\n ');
}

function adressen(liste, feld) {
  if (!liste) return '';
  keineZeilenumbrueche(liste, feld);
  const teile = []; let cur = '', q = false, w = false;
  for (const ch of liste) {
    if (ch === '"') q = !q; else if (ch === '<') w = true; else if (ch === '>') w = false;
    if ((ch === ',' || ch === ';') && !q && !w) { teile.push(cur); cur = ''; } else cur += ch;
  }
  teile.push(cur);
  return teile.map(t => t.trim()).filter(Boolean).map(t => {
    const m = /^(.*?)\s*<([^<>\s]+@[^<>\s]+)>$/.exec(t);
    if (m) {
      const name = m[1].trim().replace(/^"|"$/g, '');
      if (!name) return `<${m[2]}>`;
      return `${istAscii(name) ? (/[,;:@<>()[\]\\."]/.test(name) ? quote(name) : name) : kodiertesWort(name)} <${m[2]}>`;
    }
    if (/^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(t)) return t;
    throw new Error(`Ungültige E-Mail-Adresse in ${feld}: ${t}`);
  }).join(', ');
}

const base64Zeilen = buf => buf.toString('base64').replace(/.{1,76}/g, '$&\r\n');

function entwurfErstellen({ an, cc, bcc, betreff, text, inReplyTo, references }) {
  const von = adressen(CFG.from, 'Absender (EMAIL_FROM)');
  const domain = (/@([^>\s]+)/.exec(CFG.from || '') || [, 'localhost'])[1];
  const kopf = [
    `From: ${von}`,
    `To: ${adressen(an, 'an')}`,
    cc && `Cc: ${adressen(cc, 'cc')}`,
    bcc && `Bcc: ${adressen(bcc, 'bcc')}`,
    `Subject: ${kodiertesWort(keineZeilenumbrueche(betreff || '', 'betreff'))}`,
    `Date: ${new Date().toUTCString().replace('GMT', '+0000')}`,
    `Message-ID: <${randomBytes(12).toString('hex')}@${domain}>`,
    inReplyTo && `In-Reply-To: ${keineZeilenumbrueche(inReplyTo, 'In-Reply-To')}`,
    references && `References: ${keineZeilenumbrueche(references, 'References')}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
  ].filter(Boolean);
  const koerper = String(text || '').replace(/\r?\n/g, '\r\n');
  return Buffer.from(kopf.join('\r\n') + '\r\n\r\n' + base64Zeilen(Buffer.from(koerper, 'utf8')), 'utf8');
}

// ---------------------------------------------------------------- Werkzeuge
async function postfachOrdner() {
  return mitPostfach(async imap => {
    const liste = await ordnerListe(imap);
    const sonder = { '\\drafts': 'Entwürfe', '\\sent': 'Gesendet', '\\trash': 'Papierkorb', '\\junk': 'Spam', '\\archive': 'Archiv', '\\all': 'Alle Mails', '\\flagged': 'Markiert' };
    return liste.map(o => {
      const rolle = o.flags.map(f => sonder[f]).filter(Boolean).join(', ');
      return `- ${o.name}${rolle ? `  (${rolle})` : ''}`;
    }).join('\n') || '(keine Ordner gefunden)';
  });
}

async function mailsAuflisten({ ordner = 'INBOX', anzahl = 20, nur_ungelesen = false, seit, suche, absender } = {}) {
  const max = Math.min(Math.max(Number(anzahl) || 20, 1), 100);
  return mitPostfach(async imap => {
    await imap.cmd('EXAMINE ', mbox(ordner));
    const utf8 = [suche, absender].some(v => v && !istAscii(v));
    const teile = ['UID SEARCH' + (utf8 ? ' CHARSET UTF-8' : '')];
    if (nur_ungelesen) teile.push(' UNSEEN');
    if (seit) teile.push(' SINCE ' + imapDatum(seit));
    if (absender) teile.push(' FROM ', astr(keineZeilenumbrueche(absender, 'absender')));
    if (suche) teile.push(' TEXT ', astr(keineZeilenumbrueche(suche, 'suche')));
    if (teile.length === 1) teile.push(' ALL');
    const uids = (await imap.cmd(...teile)).filter(l => /^SEARCH\b/i.test(l))
      .flatMap(l => l.split(/\s+/).slice(1)).filter(x => /^\d+$/.test(x)).map(Number).sort((a, b) => a - b);
    if (!uids.length) return `Keine Mails in „${ordner}“ für diese Suche.`;
    const auswahl = uids.slice(-max);
    const res = fetchErgebnisse(await imap.cmd(`UID FETCH ${auswahl.join(',')} (UID FLAGS RFC822.SIZE BODY.PEEK[HEADER.FIELDS (FROM TO CC SUBJECT DATE)])`))
      .sort((a, b) => Number(b.UID) - Number(a.UID));
    const zeilen = res.map(f => {
      const k = kopfzeilen(String(f.BODY || ''));
      const neu = !(f.FLAGS || []).map(x => String(x).toLowerCase()).includes('\\seen');
      return `${neu ? '● NEU ' : ''}[UID ${f.UID}] ${kopfDekodieren(k.get('date'))}\n  Von: ${kopfDekodieren(k.get('from'))}\n  Betreff: ${kopfDekodieren(k.get('subject')) || '(kein Betreff)'}${k.get('cc') ? `\n  Cc: ${kopfDekodieren(k.get('cc'))}` : ''}  · ${groesse(Number(f['RFC822.SIZE'] || 0))}`;
    });
    return `Ordner „${ordner}“: ${uids.length} Treffer, angezeigt die neuesten ${res.length} (Status „ungelesen“ bleibt unverändert).\n\n${zeilen.join('\n\n')}`;
  });
}

async function mailLesen({ ordner = 'INBOX', uid } = {}) {
  return mitPostfach(async imap => {
    const { flags, mime } = await mailHolen(imap, ordner, uid);
    const k = mime.kopf, g = n => kopfDekodieren(k.get(n));
    let text = textAusMime(mime);
    if (text.length > MAX_TEXT) text = text.slice(0, MAX_TEXT) + `\n\n[… gekürzt, ${text.length - MAX_TEXT} weitere Zeichen]`;
    return [
      `Ordner: ${ordner} | UID: ${uid} | ${flags.map(f => f.toLowerCase()).includes('\\seen') ? 'gelesen' : 'ungelesen (bleibt ungelesen)'}`,
      `Von: ${g('from')}`,
      k.get('reply-to') && `Antwort an: ${g('reply-to')}`,
      `An: ${g('to')}`,
      k.get('cc') && `Cc: ${g('cc')}`,
      `Datum: ${g('date')}`,
      `Betreff: ${g('subject')}`,
      `Message-ID: ${k.get('message-id') || '–'}`,
      `Anhänge: ${mime.anhaenge.length ? mime.anhaenge.join('; ') : 'keine'}`,
      '', '----- Inhalt -----', text || '(kein Text)',
    ].filter(x => x !== undefined).join('\n');
  });
}

async function entwurfAnlegen(a = {}) {
  if (!a.text) throw new Error('text fehlt');
  return mitPostfach(async imap => {
    let { an, betreff } = a, inReplyTo, references, text = a.text;
    if (a.antwort_auf_uid) {
      const ordner = a.antwort_ordner || 'INBOX';
      const { mime } = await mailHolen(imap, ordner, a.antwort_auf_uid);
      const k = mime.kopf, g = n => kopfDekodieren(k.get(n));
      an ||= g('reply-to') || g('from');
      const orig = g('subject');
      betreff ||= /^\s*(re|aw|antw)\s*:/i.test(orig) ? orig : `AW: ${orig}`;
      inReplyTo = k.get('message-id');
      references = [k.get('references'), inReplyTo].filter(Boolean).join(' ') || undefined;
      if (a.zitat !== false) {
        const zitat = textAusMime(mime).slice(0, 20000).split('\n').map(z => '> ' + z).join('\n');
        text += `\n\nAm ${g('date')} schrieb ${g('from')}:\n${zitat}`;
      }
    }
    if (!an) throw new Error('Empfänger („an“) fehlt');
    if (!betreff) throw new Error('Betreff fehlt');
    const ziel = await entwuerfeOrdner(imap);
    const nachricht = entwurfErstellen({ an, cc: a.cc, bcc: a.bcc, betreff, text, inReplyTo, references });
    await imap.cmd(`APPEND ${mbox(ziel)} (\\Draft \\Seen) `, nachricht);
    return `✅ Entwurf gespeichert im Ordner „${ziel}“ – NICHT gesendet.\nAn: ${an}${a.cc ? `\nCc: ${a.cc}` : ''}\nBetreff: ${betreff}\n\nBitte im Mailprogramm unter „Entwürfe“ prüfen, ggf. anpassen und selbst absenden.`;
  });
}

const TOOLS = [
  {
    name: 'postfach_ordner',
    description: 'Listet alle Ordner des Postfachs (inkl. Entwürfe-, Gesendet-, Spam-Ordner). Nur lesend.',
    inputSchema: { type: 'object', properties: {} },
    run: postfachOrdner,
  },
  {
    name: 'mails_auflisten',
    description: 'Listet Mails eines Ordners (neueste zuerst) mit UID, Datum, Absender, Betreff und Status. Optional filtern nach ungelesen, Datum, Absender oder Suchbegriff. Nur lesend – Mails bleiben ungelesen.',
    inputSchema: {
      type: 'object',
      properties: {
        ordner: { type: 'string', description: 'Ordner, Standard: INBOX' },
        anzahl: { type: 'number', description: 'Maximale Anzahl (1–100, Standard 20)' },
        nur_ungelesen: { type: 'boolean', description: 'Nur ungelesene Mails' },
        seit: { type: 'string', description: 'Nur Mails ab Datum JJJJ-MM-TT' },
        absender: { type: 'string', description: 'Filter auf Absender (Name oder Adresse)' },
        suche: { type: 'string', description: 'Suchbegriff in Betreff/Text' },
      },
    },
    run: mailsAuflisten,
  },
  {
    name: 'mail_lesen',
    description: 'Liest eine einzelne Mail vollständig (Kopfdaten, Text, Liste der Anhänge, Links bei HTML-Mails). Nur lesend – die Mail bleibt ungelesen.',
    inputSchema: {
      type: 'object',
      properties: {
        uid: { type: 'number', description: 'UID aus mails_auflisten' },
        ordner: { type: 'string', description: 'Ordner, Standard: INBOX' },
      },
      required: ['uid'],
    },
    run: mailLesen,
  },
  {
    name: 'entwurf_anlegen',
    description: 'Legt einen E-Mail-ENTWURF im Entwürfe-Ordner des Postfachs ab. Sendet NICHT – der Mensch prüft und sendet selbst. Mit antwort_auf_uid wird der Entwurf als Antwort im selben Verlauf angelegt (Empfänger, „AW:“-Betreff und Zitat werden automatisch übernommen, wenn nicht angegeben).',
    inputSchema: {
      type: 'object',
      properties: {
        text: { type: 'string', description: 'Vollständiger Text inkl. Anrede, Grußformel und Signatur' },
        an: { type: 'string', description: 'Empfänger, z. B. "Max Muster <max@beispiel.de>"; mehrere mit Komma. Bei Antworten optional.' },
        cc: { type: 'string', description: 'Optional: Kopie an' },
        bcc: { type: 'string', description: 'Optional: Blindkopie an' },
        betreff: { type: 'string', description: 'Betreff; bei Antworten optional (dann „AW: <Original>“)' },
        antwort_auf_uid: { type: 'number', description: 'Optional: UID der Mail, auf die geantwortet wird' },
        antwort_ordner: { type: 'string', description: 'Ordner der Original-Mail, Standard: INBOX' },
        zitat: { type: 'boolean', description: 'Original unten zitieren (Standard: true)' },
      },
      required: ['text'],
    },
    run: entwurfAnlegen,
  },
];

// ---------------------------------------------------------------- MCP (JSON-RPC über stdio)
const send = msg => process.stdout.write(JSON.stringify(msg) + '\n');
const ok = (id, result) => send({ jsonrpc: '2.0', id, result });
const text = (id, t, isError = false) => ok(id, { content: [{ type: 'text', text: t }], isError });

export { mimeLesen, textAusMime, kopfDekodieren, parameter, htmlZuText, mutf7Decode, mutf7Encode, entwurfErstellen, parseImap };

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  createInterface({ input: process.stdin }).on('line', async line => {
    let msg; try { msg = JSON.parse(line); } catch { return; }
    const { id, method, params } = msg;
    if (id === undefined) return;
    try {
      if (method === 'initialize') return ok(id, {
        protocolVersion: params?.protocolVersion || '2025-06-18',
        capabilities: { tools: {} },
        serverInfo: { name: 'postfach', version: '0.1.0' },
      });
      if (method === 'ping') return ok(id, {});
      if (method === 'tools/list') return ok(id, { tools: TOOLS.map(({ run, ...t }) => t) });
      if (method === 'tools/call') {
        const tool = TOOLS.find(t => t.name === params?.name);
        if (!tool) return text(id, `Unbekanntes Werkzeug: ${params?.name}. Senden ist mit diesem Server nicht möglich.`, true);
        return text(id, await tool.run(params.arguments || {}));
      }
      send({ jsonrpc: '2.0', id, error: { code: -32601, message: `Methode nicht unterstützt: ${method}` } });
    } catch (e) { text(id, String(e.message || e), true); }
  });
}
