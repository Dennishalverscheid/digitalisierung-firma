# Digitalisierung Firma – Hinweise für Claude

## Grundregeln
- Antworte immer auf **Deutsch** (Kunden: Sie-Form; intern: Du).
- Zielmarkt ist **Deutschland/DACH**: Beachte DSGVO/BDSG, UWG, HGB/GoBD, BetrVG, AGG und den EU AI Act, wo relevant. Die Agenten unter `.claude/agents/` sind auf Englisch und teils US-orientiert geschrieben – übertrage ihre Empfehlungen auf deutsches Recht (z. B. keine Kalt-E-Mails ohne Einwilligung nach § 7 UWG, Double-Opt-In, Cookie-Einwilligung nach § 25 TDDDG).
- Keine erfundenen Zahlen, Referenzen oder Kundenstimmen. Fehlende Angaben als Platzhalter markieren.
- Nichts an Kunden oder nach außen senden ohne ausdrückliche Freigabe.

## Agenten (`.claude/agents/`)
88 Subagenten, davon 87 aus [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) (MIT, siehe `.claude/agents/LICENSE-agency-agents.txt`) und 1 eigener (**E-Mail-Manager**).

| Bereich | Agenten |
|---|---|
| **Vertrieb** | Sales Outreach, Proposal Strategist, Offer & Lead Gen Strategist, Outbound Strategist, Discovery Coach, Deal Strategist, Account Strategist, Sales Engineer, Pipeline Analyst, Pricing Analyst, Customer Success Manager, Sales Coach |
| **Content & Marketing** | Content Creator, LinkedIn Content Creator, SEO Specialist, Email Marketing Strategist, Social Media Strategist, Instagram Curator, TikTok Strategist, Video Optimization Specialist, PR & Communications Manager, Growth Hacker, Carousel Growth Engine, Short-Video Editing Coach, Podcast Strategist, Global Podcast Strategist, Twitter Engager, X/Twitter Intelligence Analyst, Reddit Community Builder, Developer Community Builder, Book Co-Author, AEO Foundations Architect, Agentic Search Optimizer, AI Citation Strategist, App Store Optimizer, Cross-Border E-Commerce Specialist, Livestream Commerce Coach, Brand Guardian, Visual Storyteller, Image Prompt Engineer, Inclusive Visuals Specialist, Trend Researcher, Feedback Synthesizer |
| **Paid Media** | PPC Campaign Strategist, Paid Social Strategist, Ad Creative Strategist, Paid Media Auditor, Programmatic & Display Buyer, Search Query Analyst, Tracking & Measurement Specialist |
| **Teamführung & Personal** | Chief of Staff, Change Management Consultant, Organizational Psychologist, Corporate Training Designer, HR Onboarding, Recruitment Specialist, Senior Project Manager, Project Shepherd, Sprint Prioritizer |
| **Office** | **E-Mail-Manager**, Meeting Notes Specialist, Document Generator, Executive Summary Generator, Customer Service, Support Responder, Legal Document Review, Analytics Reporter, Report Distribution Agent, Sales Data Extraction Agent, Data Consolidation Agent, Email Intelligence Engineer |
| **Finanzen** | Bookkeeper & Controller, Finance Tracker, FP&A Analyst, Financial Analyst, Tax Strategist, Accounts Payable Agent |
| **Digitalisierung & Prozesse** | Automation Governance Architect (n8n), Workflow Architect, Workflow Optimizer, Operations Manager, Business Strategist, Supply Chain Strategist, Agents Orchestrator, MCP Builder |
| **Recht & Datenschutz** | Data Privacy Officer, Legal Compliance Checker, Compliance Auditor |

Aufruf z. B.: „Nutze den Sales Outreach Agenten und schreib eine LinkedIn-Nachricht an …“ oder „Lass den E-Mail-Manager meinen Posteingang durchgehen.“

## ChatGPT
Deutsche Fassungen für Custom GPTs liegen in `chatgpt-gpts/` (Anleitung in `chatgpt-gpts/README.md`).

## ChatGPT als zweite Meinung (`chatgpt_fragen`)
Über den MCP-Server `chatgpt` (`tools/chatgpt-mcp/server.mjs`, eingetragen in `.mcp.json`) kann Claude ChatGPT befragen – zum Gegenlesen, für alternative Formulierungen oder eine zweite Einschätzung.
- Voraussetzung: Umgebungsvariable `OPENAI_API_KEY` (nie ins Repository schreiben); optional `OPENAI_MODEL`.
- Nur nutzen, wenn der Nutzer es wünscht oder eine zweite Meinung echten Mehrwert bringt; Antworten von ChatGPT kritisch prüfen und als solche kennzeichnen.
- **Keine vertraulichen Daten** (Kunden-, Mitarbeiter-, Finanz- oder Vertragsdaten, personenbezogene Daten) an ChatGPT senden, solange kein Auftragsverarbeitungsvertrag mit OpenAI besteht. Im Zweifel anonymisieren.

## Agenten aktualisieren
```bash
git clone --depth 1 https://github.com/msitarzewski/agency-agents /tmp/aa
# gewünschte Dateien erneut nach .claude/agents/ kopieren (Dateinamen sind identisch)
```
