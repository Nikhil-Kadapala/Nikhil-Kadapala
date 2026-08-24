# Fern template adoption — changelog

Log **from day one**. Fern’s post is credible because it has numbers (weeks, commits, spend, iterations on one animation). Reconstructing that later is guesswork.

Update this file at the end of every wave PR, and whenever a tracked metric moves.

## Required fields (every entry)

Copy this block. Fill every field. Use `n/a` only if it truly does not apply.

```
### YYYY-MM-DD — <wave or event>

- Wave / PR:
- Commits in this slice (count + range):
- Wall-clock (hours):
- AI tool spend (USD, optional but preferred):
- AGENTS.md edits (what rule landed):
- Voice rules added or changed:
- Zod / frontmatter schema changes:
- Hard component iterations (name + how many passes):
- Design loop (Figma / MCP / hand polish in `bun dev`):
- Prompting note (outcome vs prescription; what worked):
- Preview URL reviewed (yes/no):
- Skipped on purpose:
- Content taxonomy change:
- Context checkpoint:
```

## Running totals

Reset only if we explicitly restart the adoption.

| Metric | Value |
|---|---|
| Wave PRs merged | 0 |
| Commits since adoption start | 0 (wave 0 not merged yet) |
| Estimated hours | ~3 (briefing + D7/D8 resolution) |
| AI spend | not logged yet |
| AGENTS.md rewrites | 1 (thin stack file; full voice is wave 1) |
| Zod schema versions | 0 (pipeline not imported) |
| Hero / graph polish passes | 0 this adoption (pre-adoption work on `main`) |

## Log

### 2026-08-24 — Wave 0 baseline (this change)

- Wave / PR: wave 0, working tree on `main` (not yet a PR)
- Commits in this slice (count + range): pending
- Wall-clock (hours): ~3
- AI tool spend (USD, optional but preferred): not logged
- AGENTS.md edits (what rule landed): kept thin stack + pointer to this folder; full Fern-shaped voice is wave 1
- Voice rules added or changed: none yet (D5 settled: first-person, 3–4 concrete rules in wave 1, no Vale)
- Zod / frontmatter schema changes: none. D7 locked the target schema (`type`: case-study \| build-log \| research \| teaching)
- Hard component iterations (name + how many passes): n/a
- Design loop (Figma / MCP / hand polish in `bun dev`): briefing only; no visual import
- Prompting note (outcome vs prescription; what worked): template review used outcome “borrow OS, not look”; D8 used “do not land work we would delete in wave 2”
- Preview URL reviewed (yes/no): no (no app behavior change intended)
- Skipped on purpose: campaigns, SEO factory, employee profiles, Fern tokens, `/post`, three-tree MDX WIP, Vale
- Content taxonomy change: adopted D7.md — one `/writing/[slug]` pipeline + catalogs for projects/publications
- Context checkpoint: to be written after this lands

#### D8 keep vs discard

**Kept (aligned, would survive later waves)**

- `.agents/skills/**` including context-save / context-restore
- `.github/workflows/ci.yml` (typecheck, lint, build on PR)
- `AGENTS.md`, `CLAUDE.md`
- `.gitignore` host-state rules
- `next.config.ts` Vercel preview (no static export)
- `package.json` / `bun.lock` additions: Tailwind 4, gray-matter, Radix, CVA, lucide, tailwind-merge
- `lib/utils.ts` (`cn()`), `lib/site.ts`
- `components.json`, `components/ui/button.tsx`, `components/ui/sheet.tsx`
- `postcss.config.mjs`
- `content/**/*.mdx` as seed files to recategorize in wave 2
- `README.md` site URL
- this artifacts folder

**Discarded (would force a rewrite under D1/D4/D7)**

- Three-kind `lib/mdx.ts` and typed `lib/content.ts` WIP
- App pages rewritten to consume that loader
- `app/globals.css` class dump vs DESIGN.md tokens
- Header/card rewires onto that CSS
- Deleted `CodeWorkbench` / `ResearchMap` (restored from `main`)
- `D7.md` (folded into `plan.mdx`, then deleted)
