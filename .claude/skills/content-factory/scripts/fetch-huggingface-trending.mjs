#!/usr/bin/env node
// Pull HuggingFace's trending models list via headless Chromium.
// Usage:
//   node fetch-huggingface-trending.mjs [--top 10] [--out path/to/raw-trends.json]
//
// Side effects:
//   - Writes raw JSON to --out (default: output/content-factory/<YYYY-MM-DD>/raw-trends.json)
//   - Appends one row per model into skills/content-factory/data/trending.db

import { chromium } from "playwright";
import Database from "better-sqlite3";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SKILL_ROOT = resolve(__dirname, "..");
const REPO_ROOT = resolve(SKILL_ROOT, "..", "..");

const args = process.argv.slice(2);
const argMap = Object.fromEntries(
    args.reduce((acc, a, i, arr) => {
        if (a.startsWith("--")) acc.push([a.slice(2), arr[i + 1]]);
        return acc;
    }, []),
);

const TOP = parseInt(argMap.top || "10", 10);
const today = new Date().toISOString().slice(0, 10);
const OUT_DEFAULT = join(REPO_ROOT, "output", "content-factory", today, "raw-trends.json");
const OUT = resolve(argMap.out || OUT_DEFAULT);
const DB_PATH = join(SKILL_ROOT, "data", "trending.db");

const URL = "https://huggingface.co/models?sort=trending";

async function main() {
    mkdirSync(dirname(OUT), { recursive: true });
    mkdirSync(dirname(DB_PATH), { recursive: true });

    const browser = await chromium.launch({ headless: true });
    const ctx = await browser.newContext({
        userAgent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    });
    const page = await ctx.newPage();

    await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForSelector("article", { timeout: 15000 }).catch(() => {});

    const models = await page.$$eval(
        "article",
        (cards, top) => {
            return cards.slice(0, top).map((card) => {
                const link = card.querySelector("a[href^='/']");
                const href = link?.getAttribute("href") || "";
                const fullName = href.replace(/^\//, "");
                const [author, ...rest] = fullName.split("/");
                const name = rest.join("/") || fullName;
                const text = card.innerText || "";
                const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
                const taskMatch = text.match(/(text-generation|image-generation|automatic-speech-recognition|text-to-image|text-to-video|image-to-text|sentence-similarity|feature-extraction|fill-mask|question-answering|summarization|translation|conversational|object-detection|image-classification|text-classification|token-classification|zero-shot-classification|reinforcement-learning|graph-ml|robotics|tabular-classification|tabular-regression|video-classification|visual-question-answering|document-question-answering|depth-estimation|image-segmentation)/i);
                const downloadsMatch = text.match(/([\d,.]+[kKmM]?)\s*Downloads/i);
                const likesMatch = text.match(/([\d,.]+[kKmM]?)\s*Likes/i);
                return {
                    full_name: fullName,
                    author,
                    name,
                    url: `https://huggingface.co${href}`,
                    task: taskMatch?.[1] || null,
                    downloads_raw: downloadsMatch?.[1] || null,
                    likes_raw: likesMatch?.[1] || null,
                    card_text: lines.slice(0, 6).join(" | "),
                };
            });
        },
        TOP,
    );

    // Enrich each model with a short summary from its card.
    for (const m of models) {
        try {
            await page.goto(m.url, { waitUntil: "domcontentloaded", timeout: 25000 });
            const summary = await page.evaluate(() => {
                const main = document.querySelector("main");
                if (!main) return null;
                const paras = Array.from(main.querySelectorAll("p"))
                    .map((p) => p.innerText.trim())
                    .filter((t) => t.length > 40 && t.length < 600);
                return paras[0] || null;
            });
            m.summary = summary;
        } catch {
            m.summary = null;
        }
    }

    await browser.close();

    const fetchedAt = new Date().toISOString();
    const payload = {
        fetched_at: fetchedAt,
        source: URL,
        count: models.length,
        models,
    };

    writeFileSync(OUT, JSON.stringify(payload, null, 2));
    console.log(`Wrote ${models.length} trending models to ${OUT}`);

    // SQLite append (write-only from this skill's perspective).
    const db = new Database(DB_PATH);
    db.exec(`
        CREATE TABLE IF NOT EXISTS trends (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fetched_at TEXT NOT NULL,
            full_name TEXT NOT NULL,
            author TEXT,
            name TEXT,
            url TEXT,
            task TEXT,
            downloads_raw TEXT,
            likes_raw TEXT,
            summary TEXT,
            card_text TEXT
        )
    `);
    const insert = db.prepare(`
        INSERT INTO trends (fetched_at, full_name, author, name, url, task, downloads_raw, likes_raw, summary, card_text)
        VALUES (@fetched_at, @full_name, @author, @name, @url, @task, @downloads_raw, @likes_raw, @summary, @card_text)
    `);
    const insertMany = db.transaction((rows) => {
        for (const r of rows) insert.run({ fetched_at: fetchedAt, ...r });
    });
    insertMany(models);
    db.close();
    console.log(`Appended ${models.length} rows to ${DB_PATH}`);
}

main().catch((err) => {
    console.error("fetch-huggingface-trending failed:", err.message);
    process.exit(1);
});
