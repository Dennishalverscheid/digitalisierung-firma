---
name: content-factory
description: Use when the user wants to turn today's trending HuggingFace AI models into a niche-mapped Instagram carousel. Pulls the trending list via headless browser, logs it to a local SQLite, picks the best fit for the user's niche, and produces 7 carousel slide prompts plus a master caption — all paste-ready for Higgsfield rendering. Triggers on phrases like "pull trending HuggingFace models", "today's AI trends to a carousel", or "make me an Instagram carousel from today's trends".
---

# Content Factory — HuggingFace Trends → Instagram Carousel

Pull today's trending HuggingFace models, pick the one that matters most for the user's niche, and produce a 7-slide Instagram carousel ready to render in Higgsfield.

This skill is built to run **daily**, but every run is self-contained — it does not read prior days' data.

## When to use

User prompts that should trigger this skill:
- "Pull today's trending HuggingFace models and make a carousel."
- "Run the trending DB."
- "Today's AI trends to an Instagram post."
- "Daily HuggingFace pull."

## Inputs

Ask once at the start (skip whichever the user already provided):

1. **Niche:** what audience the carousel is for. Default: "AI for marketing operators."
2. **Brand voice:** 2–3 tone words. Default: "direct, practical, no-hype."
3. **Brand handle / signature:** what to put on slide 7's CTA. Default: skip the CTA branding.

## Workflow — strict order

### Step 1 — Pull the trending list

Run the Playwright scraper:

```bash
node .claude/skills/content-factory/scripts/fetch-huggingface-trending.mjs --top 10 --out output/content-factory/<YYYY-MM-DD>/raw-trends.json
```

This visits `https://huggingface.co/models?sort=trending`, scrapes the top N, and writes both:
- `output/content-factory/<YYYY-MM-DD>/raw-trends.json` (today's pull)
- An append-only row in `.claude/skills/content-factory/data/trending.db` (SQLite — write-only from this skill's perspective)

Dependencies (once per session): `npm install --prefix .claude/skills/content-factory --ignore-scripts` (Chromium is preinstalled in cloud sessions). Always pass `--out` explicitly.

If the scrape fails (network, layout change, anti-bot), fall back to `examples/sample-trending-pull.json` and tell the user the run is using a fixture.

### Step 2 — Niche-map

Load `prompts/niche-mapping.md` and rank today's pulled models by relevance to the user's niche. Output a short ranked list (model name, relevance 1–10, one-line "why it matters for this audience"). Drop anything below 6.

### Step 3 — Pick one trend

Pick the **highest-relevance, most-explainable** trend. If two are tied on relevance, prefer the one that's easier to demo visually.

### Step 4 — Build the carousel

Load `prompts/trend-to-carousel.md` and produce 7 slides. Each slide gets:
- Slide copy (≤14 words on the visible card).
- Speaker-note expansion (1–3 sentences for the caption pull).
- A Higgsfield image prompt using `templates/carousel-slide-prompt.md`.

Slide structure:

| # | Purpose |
|---|---|
| 1 | Hook — tension or stat that makes them swipe |
| 2 | What it is |
| 3 | Why it matters NOW |
| 4 | How to use it (1 concrete workflow) |
| 5 | What changes for the audience's job |
| 6 | The bigger pattern (zoom out) |
| 7 | CTA — save / follow / comment trigger |

### Step 5 — Write the caption

Use `templates/caption-template.md`. Caption ≤2200 chars (IG limit), front-loaded, last paragraph is the CTA.

### Step 6 — Higgsfield handoff

For each slide's image prompt:

1. If the Higgsfield MCP is connected, call `ToolSearch` with query `higgsfield` and use the image-generation tool to render the slide.
2. If not, output the prompt paste-ready under the slide.

Never invent Higgsfield tool names — discover them at runtime.

### Step 7 — Write outputs

Final deliverable structure:

```
output/content-factory/<YYYY-MM-DD>/
├── raw-trends.json
├── ranked.md             # Step 2 output
├── carousel.md           # Slides + caption + Higgsfield prompts
└── higgsfield-prompts.md # Just the prompts, paste-ready
```

## Scheduling — pick one

This skill runs once per day. Three ways to wire it up:

**Option A — `/loop` inside a Claude Code session** (good for: testing, manual oversight)
```
/loop 24h Run the content-factory skill on today's HuggingFace trending list for the niche "AI for marketing operators".
```

**Option B — Claude Code `/schedule` (cloud routine)** (good for: laptop-off, hands-off)
```
/schedule daily at 08:00 ET — Run the content-factory skill on today's HuggingFace trending list...
```

**Option C — `crontab` on this machine** (good for: simple, local, no cloud)
```cron
0 8 * * * cd ~/Coding/higgsfield && claude -p "Run the content-factory skill on today's HuggingFace trending list for the niche 'AI for marketing operators'." >> ~/Coding/higgsfield/output/content-factory/cron.log 2>&1
```

The skill itself does NOT install any of these — that's the user's call.

## Voice & tone

- Match the user's stated brand voice. If unspecified: direct, practical, no-hype.
- Slide 1 hook must NOT use "this changes everything" / "you won't believe" / "game-changer." If it does, rewrite.
- Slide 7 CTA is always concrete (save / share / comment a specific word) — never "follow for more."

## Demo command

```
Pull today's trending HuggingFace models and turn the most relevant one into an Instagram carousel for the niche "AI for marketing operators".
```

## Anpassung für diese Firma (DACH)

- Carousel-Texte, Caption und Hashtags auf **Deutsch** schreiben (Higgsfield-Bildprompts dürfen Englisch bleiben, Text auf den Slides aber Deutsch).
- Standard-Nische, wenn nichts angegeben: „KI & Digitalisierung für den deutschen Mittelstand“.
- Keine erfundenen Zahlen: Kennzahlen nur aus `raw-trends.json` bzw. der Modellseite übernehmen, sonst `[PLATZHALTER]`. Läuft der Skill mit der Fixture (`examples/sample-trending-pull.json`, fiktive Modelle), das Ergebnis deutlich als **Testlauf – nicht veröffentlichen** kennzeichnen.
- KI-generierte Bilder in der Caption kennzeichnen (Instagram-KI-Label setzen; Transparenzpflichten nach Art. 50 EU AI Act beachten).
- Nichts posten oder einplanen (z. B. über Metricool) ohne ausdrückliche Freigabe.
- Das Higgsfield-MCP in dieser Umgebung kann derzeit nur Workspaces, Modelle, Guthaben und bisherige Generierungen anzeigen, aber **keine Bilder erzeugen** → Prompts paste-fertig ausgeben.
- Ausgaben unter `output/content-factory/<YYYY-MM-DD>/` im Repo-Root ablegen.
- Der Scraper braucht Netzzugriff auf `huggingface.co` (in der Cloud-Umgebung freigeben) und `npm install` im Skill-Ordner.
