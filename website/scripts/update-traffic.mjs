#!/usr/bin/env node
/**
 * Fetches GitHub's repo traffic ("Insights > Traffic") daily view counts and
 * upserts them into website/src/data/traffic-history.json, keyed by date.
 *
 * GitHub's traffic API only retains a rolling 14-day window, so this is meant
 * to run on a daily schedule (see .github/workflows/update-traffic.yml) to
 * build up history over time. Upserting by date (rather than appending) makes
 * re-runs idempotent and lets "today"'s count self-correct as the day
 * progresses.
 *
 * Usage:
 *   GITHUB_TOKEN=... node scripts/update-traffic.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = join(__dirname, "..", "src", "data", "traffic-history.json");

const repo = process.env.GITHUB_REPOSITORY ?? "viveknaskar/everything-ai-ml";
const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.error("GITHUB_TOKEN is required");
  process.exit(1);
}

const res = await fetch(`https://api.github.com/repos/${repo}/traffic/views`, {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

if (!res.ok) {
  console.error(`GitHub API request failed: ${res.status} ${res.statusText}`);
  console.error(await res.text());
  process.exit(1);
}

const { views } = await res.json();

const existing = JSON.parse(readFileSync(DATA_PATH, "utf-8"));
const byDate = new Map(existing.map((entry) => [entry.date, entry]));

for (const { timestamp, count, uniques } of views) {
  const date = timestamp.slice(0, 10);
  byDate.set(date, { date, views: count, uniques });
}

const merged = [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));

writeFileSync(DATA_PATH, JSON.stringify(merged, null, 2) + "\n");
console.log(`Updated traffic history: ${merged.length} days recorded.`);
