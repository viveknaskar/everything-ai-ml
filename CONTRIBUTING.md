# Contributing

Thank you for helping make this resource collection better!

## How to Contribute

1. **Fork** this repository
2. **Add or update** resources in [`website/src/data/resources.ts`](website/src/data/resources.ts) — the single source of truth for both the README list and the website
3. **Regenerate the README** so it stays in sync:
   ```bash
   cd website
   npm install      # first time only
   npm run gen:readme
   ```
4. **Commit both** `website/src/data/resources.ts` and the updated `README.md`
5. **Open a Pull Request** with a brief description of what you added

> **Note:** Do not edit the resource list in `README.md` by hand — the region between the `AUTOGEN` markers is generated. CI runs `npm run check:readme` and will fail if the README is out of sync.

## Guidelines

- **Relevance**: Resources should relate to AI/ML, Generative AI, Agentic AI, MLOps, or closely related topics.
- **Quality**: Prefer well-known, peer-reviewed, or widely respected sources (research papers, official docs, reputable courses/blogs).
- **Format**: Add a `{ title, url }` entry (optionally `description` / `badge`) to the appropriate `Section` in `resources.ts`.
- **No duplicates**: Check that the resource isn't already listed before adding it.
- **New sections**: If your resource doesn't fit any existing section, add a new `Section` object (with a unique `id`, `title`, and `icon`). The Table of Contents is generated automatically.

## What's Welcome

- Research papers, courses, tutorials, and books
- Tools, frameworks, and libraries
- Blog posts from engineering teams or recognized researchers
- YouTube channels or playlists focused on learning

## What to Avoid

- Promotional or affiliate content
- Resources behind mandatory paywalls without a free tier or preview
- Low-quality or unverified content

## Questions

Open an issue if you're unsure where a resource fits or want to discuss a larger addition before submitting a PR.
