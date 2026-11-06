# Trend → Instagram Carousel

You have ONE picked HuggingFace model. Build a 7-slide carousel for the user's niche.

## Output structure (strict)

For each slide, write:

```
## Slide N — <purpose>

**On-card copy (≤14 words, large type):**
…

**Speaker note (1–3 sentences for caption pull):**
…

**Higgsfield image prompt:**
[full prompt using templates/carousel-slide-prompt.md — no shortcuts]
```

## Slide-by-slide guide

**Slide 1 — Hook.** A tension, a stat, or a contrast that makes them swipe. NOT "this changed everything." Specific is the enemy of generic. Ideal pattern: "[Specific number / specific thing] just [happened]. Here's what it actually means for [audience]."

**Slide 2 — What it is.** Plain English. No "leveraging cutting-edge transformer architecture." Treat the reader as smart but unfamiliar. One sentence + one supporting detail.

**Slide 3 — Why it matters NOW.** What's true this week that wasn't true last month. If you can't name a specific shift (release, capability, price drop, license change), the model isn't worth a carousel.

**Slide 4 — How to use it.** ONE concrete workflow the audience can run today. Name the steps, name the inputs, name the outputs. If you can't, go back to step 3 of the SKILL.md flow and pick a different trend.

**Slide 5 — What changes for their job.** Connect the model directly to the audience's day-to-day. "If you do X today, this turns it into Y." Resist abstraction.

**Slide 6 — The bigger pattern.** Zoom out one level — what trend does this fit into? Keep it 2–3 sentences. End on a thought worth screenshotting.

**Slide 7 — CTA.** ONE concrete action. Save / share / comment a specific word / send to a specific colleague. Avoid "follow for more" — it's noise.

## Visual coherence rules

- All 7 slides share the same color palette and typography (set in slide 1's prompt; reuse anchors).
- Slides 2–6 share the same composition language (e.g. "centered headline + supporting graphic, 4:5 vertical, clean").
- Slide 1 and Slide 7 can break the pattern visually for emphasis.
- No stock-photo people. Either abstract / type-driven slides OR generated illustrative imagery — not a mix.

## Fail loudly

If you find yourself writing filler ("It's a really exciting development!"), stop. The slide isn't earning its spot — rewrite it or cut it. 7 strong slides > 7 mediocre ones; if you can only earn 5, ship 5.
