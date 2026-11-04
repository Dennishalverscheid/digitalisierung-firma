#!/usr/bin/env node
// Kleiner MCP-Server (stdio, ohne Abhängigkeiten): Claude kann ChatGPT/OpenAI befragen.
// Benötigt die Umgebungsvariable OPENAI_API_KEY. Optional: OPENAI_MODEL (Standard: gpt-5).
import { createInterface } from 'node:readline';

const MODEL = process.env.OPENAI_MODEL || 'gpt-5';
const TOOLS = [{
  name: 'chatgpt_fragen',
  description: 'Stellt ChatGPT (OpenAI) eine Frage und gibt die Antwort zurück. Nützlich für eine zweite Meinung, Gegenlesen von Texten, alternative Formulierungen oder Ideen. Keine vertraulichen Kunden-, Mitarbeiter- oder Finanzdaten senden.',
  inputSchema: {
    type: 'object',
    properties: {
      frage: { type: 'string', description: 'Die Frage bzw. der Auftrag an ChatGPT, vollständig formuliert.' },
      rolle: { type: 'string', description: 'Optional: Systemanweisung, z. B. eine Agenten-Rolle aus chatgpt-gpts/.' },
      modell: { type: 'string', description: `Optional: OpenAI-Modell (Standard: ${MODEL}).` },
    },
    required: ['frage'],
  },
}];

const send = msg => process.stdout.write(JSON.stringify(msg) + '\n');
const ok = (id, result) => send({ jsonrpc: '2.0', id, result });
const text = (id, t, isError = false) => ok(id, { content: [{ type: 'text', text: t }], isError });

async function frageChatGPT({ frage, rolle, modell }) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error('OPENAI_API_KEY ist nicht gesetzt. Bitte als Umgebungsvariable bzw. Secret hinterlegen.');
  const messages = [
    { role: 'system', content: rolle || 'Du bist ein hilfreicher Assistent für ein deutsches Unternehmen. Antworte auf Deutsch, präzise und praxisnah.' },
    { role: 'user', content: frage },
  ];
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({ model: modell || MODEL, messages }),
    signal: AbortSignal.timeout(180_000),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`OpenAI-Fehler ${res.status}: ${data?.error?.message || res.statusText}`);
  return data?.choices?.[0]?.message?.content ?? '(leere Antwort)';
}

createInterface({ input: process.stdin }).on('line', async line => {
  let msg; try { msg = JSON.parse(line); } catch { return; }
  const { id, method, params } = msg;
  if (id === undefined) return; // Benachrichtigungen ignorieren
  try {
    if (method === 'initialize') return ok(id, {
      protocolVersion: params?.protocolVersion || '2025-06-18',
      capabilities: { tools: {} },
      serverInfo: { name: 'chatgpt', version: '0.1.0' },
    });
    if (method === 'ping') return ok(id, {});
    if (method === 'tools/list') return ok(id, { tools: TOOLS });
    if (method === 'tools/call') {
      if (params?.name !== 'chatgpt_fragen') return text(id, `Unbekanntes Werkzeug: ${params?.name}`, true);
      return text(id, await frageChatGPT(params.arguments || {}));
    }
    send({ jsonrpc: '2.0', id, error: { code: -32601, message: `Methode nicht unterstützt: ${method}` } });
  } catch (e) { text(id, String(e.message || e), true); }
});
