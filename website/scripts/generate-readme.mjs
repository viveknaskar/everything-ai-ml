#!/usr/bin/env node
/**
 * Generates the curated-list portion of the root README.md from the single
 * source of truth: website/src/data/resources.ts.
 *
 * Only the region between the AUTOGEN markers is rewritten; the README header
 * (title/badges/intro) and footer (Contributing/License) are left untouched.
 *
 * Usage:
 *   npm run gen:readme     # rewrite README.md
 *   npm run check:readme   # fail if README.md is out of sync (CI)
 *
 * No extra dependency: resources.ts is transpiled with the `typescript` devDep
 * already present, then imported as ESM.
 */
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const scriptDir = dirname(fileURLToPath(import.meta.url));
const dataPath = join(scriptDir, "..", "src", "data", "resources.ts");
const readmePath = join(scriptDir, "..", "..", "README.md");

const START =
  "<!-- AUTOGEN:START — do not edit by hand; generated from website/src/data/resources.ts via `npm run gen:readme` -->";
const END = "<!-- AUTOGEN:END -->";

/** Load the `sections` array out of the TypeScript data file. */
async function loadSections() {
  const source = readFileSync(dataPath, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const dir = mkdtempSync(join(tmpdir(), "readme-gen-"));
  const file = join(dir, "resources.mjs");
  writeFileSync(file, outputText);
  try {
    const mod = await import(pathToFileURL(file).href);
    return mod.sections;
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

/**
 * Replicate GitHub's heading-anchor slugger for the inputs used here:
 * lowercase, strip punctuation that isn't a word char/space/hyphen, then turn
 * each remaining whitespace char into a hyphen (without collapsing runs, to
 * match GitHub exactly).
 */
function slug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s/g, "-");
}

function renderResource({ title, url, description }) {
  const desc = description ? ` — ${description}` : "";
  return `- [${title}](${url})${desc}`;
}

function renderSection(section) {
  const lines = [`## ${section.title}`, ""];

  if (section.resources?.length) {
    lines.push(...section.resources.map(renderResource), "");
  }

  for (const sub of section.subsections ?? []) {
    lines.push(`**${sub.heading}:**`, "");
    lines.push(...sub.resources.map(renderResource), "");
  }

  return lines.join("\n").trimEnd();
}

function renderBody(sections) {
  const toc = [
    "## Table of Contents",
    "",
    ...sections.map((s) => `- [${s.title}](#${slug(s.title)})`),
  ].join("\n");

  const body = sections.map(renderSection).join("\n\n---\n\n");

  return [START, "", toc, "", "---", "", body, "", END].join("\n");
}

function splice(readme, generated) {
  const startIdx = readme.indexOf(START);
  const endIdx = readme.indexOf(END);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(
      `README.md is missing AUTOGEN markers. Add these lines around the list:\n${START}\n${END}`
    );
  }
  const before = readme.slice(0, startIdx);
  const after = readme.slice(endIdx + END.length);
  return `${before}${generated}${after}`;
}

async function main() {
  const check = process.argv.includes("--check");
  const sections = await loadSections();
  const current = readFileSync(readmePath, "utf8");
  const next = splice(current, renderBody(sections));

  if (check) {
    if (current !== next) {
      console.error(
        "README.md is out of sync with website/src/data/resources.ts.\n" +
          "Run `npm run gen:readme` (in website/) and commit the result."
      );
      process.exit(1);
    }
    console.log("README.md is in sync.");
    return;
  }

  if (current === next) {
    console.log("README.md already up to date.");
    return;
  }
  writeFileSync(readmePath, next);
  console.log("README.md regenerated from resources.ts.");
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
