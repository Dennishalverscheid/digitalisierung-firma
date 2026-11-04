#!/usr/bin/env node
// PreToolUse-Hook "Sende-Sperre": Claude darf in diesem Projekt keine E-Mails senden,
// beantworten oder weiterleiten – nur lesen und Entwürfe anlegen. Abgeschickt wird vom Menschen.
// Blockiert (Exit-Code 2): Mail-Werkzeuge mit send/reply/forward im Namen (außer Entwurfs-Werkzeuge)
// sowie Shell-Befehle, die direkt Mails verschicken (sendmail, swaks, SMTP-URLs …).
let input = '';
process.stdin.on('data', d => (input += d)).on('end', () => {
  let j = {}; try { j = JSON.parse(input); } catch { process.exit(0); }
  const name = String(j.tool_name || '');
  const sperren = grund => { process.stderr.write(`Sende-Sperre: ${grund} E-Mails werden nur als Entwurf angelegt und vom Menschen selbst gesendet (siehe postfach/README.md).\n`); process.exit(2); };
  if (name.startsWith('mcp__')) {
    const mail = /(mail|gmail|outlook|imap|smtp|postfach|exchange|m365|office365)/i.test(name);
    const senden = /(send|reply|forward|senden|antworten|weiterleit|submit)/i.test(name);
    const entwurf = /(draft|entwurf)/i.test(name);
    if (mail && senden && !entwurf) sperren(`Werkzeug „${name}“ würde eine Mail verschicken.`);
  }
  if (name === 'Bash') {
    const cmd = String(j.tool_input?.command || '');
    // Nur echte Aufrufe (am Befehlsanfang bzw. nach ; & | $( ), nicht bloße Erwähnungen in Texten.
    const aufruf = /(^|[;&|\n]|\$\()\s*(sudo\s+)?(\S*\/)?(sendmail|swaks|msmtp|ssmtp|mutt|mailx|mail\s+-s)\b/im;
    if (aufruf.test(cmd) || /curl\b[^\n]*smtps?:\/\//i.test(cmd) || /(python3?|node)\b[^\n]*(smtplib|nodemailer)/i.test(cmd)) sperren('Shell-Befehl würde eine Mail verschicken.');
  }
  process.exit(0);
});
