# Niche Mapping

You have a JSON file at `output/content-factory/<YYYY-MM-DD>/raw-trends.json` with today's trending HuggingFace models. Rank them for one specific audience.

## Inputs you should already have

- **Niche:** the audience the carousel is for (e.g. "AI for marketing operators", "indie SaaS founders", "ML researchers").
- **Brand voice:** 2–3 tone words from the user.

## Output

A single markdown ranked list. Format:

```
# Trending — <YYYY-MM-DD>
**Niche:** <niche>
**Pulled:** <count> models from huggingface.co/models?sort=trending

| Rank | Relevance (1–10) | Model | Task | Why it matters for this niche |
|---|---|---|---|---|
```

Then under the table, two short sections:

**Top pick.** Name the single model you'd build the carousel around, with a 2–3 sentence rationale.

**Skipped.** A 2–3 line list of models you cut and the one-line reason for each.

## Ranking rules

- Relevance ≥7 means: the audience can plausibly use or care about this model in the next 30 days.
- Relevance 4–6 means: tangentially interesting, drop unless nothing scores higher.
- Relevance ≤3 means: niche mismatch — drop.
- Bias toward models with usable demos / inference endpoints. A foundation model release without a way to play with it ranks lower for marketing-operator audiences.
- Penalize duplicate-task clusters: if 4 of 10 models are TTS variants, only the most prominent one survives.
- Reward novelty for the audience: a model that opens a new workflow beats a 2% improvement on a familiar one.

## Why this matters

The carousel only works if slide 4 ("how to use it") is genuinely usable for the audience. If the picked model can't pass slide 4, the carousel is wrong — regardless of how trending the model is.
