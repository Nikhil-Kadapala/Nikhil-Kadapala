# Fern template adoption — changelog

Log **from day one**. Fern’s post is credible because it has numbers (weeks, commits, spend, iterations on one animation). Reconstructing that later is guesswork. Claims for the eventual public post map to sources in [build-log-sources.md](./build-log-sources.md).

This file is the per-wave build log. It is **not** a site page. Optional prose scraps live in [notes/](./notes/). One `/writing` `case-study` ships after adoption finishes.

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
| Wave PRs merged | 4 (wave 0 PR #1, wave 1 PR #3, wave 2 PR #4, wave 3 PR #6) |
| Commits since adoption start | 13 (`a8a53aa`..`4cfe859`, including merges) |
| Estimated hours | ~10 (briefing + D7/D8 + waves 1-3) |
| AI spend | not logged yet |
| AGENTS.md rewrites | 2 (wave 0 thin stack; wave 1 full authoring + voice) |
| Zod schema versions | 2 (`cover` optional path under `content/assets/`) |
| Hero / graph polish passes | 0 this adoption (pre-adoption work on `main`) |
| Color system revisions | 1 (D10 two-accent; green scope corrected once after over-application) |

## Log

### 2026-08-29 — Wave 4 article chrome (this change)

- Wave / PR: wave 4, branch `chore/fern-adoption-wave-4` (not yet a PR)
- Commits in this slice (count + range): pending until PR
- Wall-clock (hours): pending
- AI tool spend (USD, optional but preferred): not logged
- AGENTS.md edits (what rule landed): n/a
- Voice rules added or changed: n/a
- Zod / frontmatter schema changes: optional `cover` (relative path under `content/assets/`)
- Hard component iterations (name + how many passes): n/a this slice
- Design loop (Figma / MCP / hand polish in `bun dev`): pending preview
- Prompting note (outcome vs prescription; what worked): HTML handoff as reference only; D10 green labels; no GIF blur; `--radius-lg` stays 20px
- Preview URL reviewed (yes/no): pending CI
- Skipped on purpose: catalog `/research/[slug]` restyle; stock cover photo; `backdrop-filter` on GIF pill; colorful Shiki themes; overwriting `--radius-lg`
- Content taxonomy change: n/a
- Context checkpoint: pending after merge

### 2026-08-29 — Wave 3 two-accent color system (merged)

- Wave / PR: wave 3, [PR #6](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/6), merge `4cfe859`
- Commits in this slice (count + range): 4 (`6279c85`..`4cfe859`, including merges; 2 feature commits, one of them the out-of-band hydration fix in [PR #7](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/7))
- Wall-clock (hours): ~2 (planning session + implementation session)
- AI tool spend (USD, optional but preferred): not logged
- AGENTS.md edits (what rule landed): n/a
- Voice rules added or changed: n/a
- Zod / frontmatter schema changes: n/a
- Hard component iterations (name + how many passes): color system, 2 passes. First pass put `--green` on h2/h3 and nav; rejected. Second pass narrowed it to small mono labels only.
- Design loop (Figma / MCP / hand polish in `bun dev`): hand polish in `bun dev`, then contrast checked in oklch. Green sits at L=0.47 for AA Large (3:1) on the `#080808` canvas; L=0.43 measured only ~2.5:1 and was rejected.
- Prompting note (outcome vs prescription; what worked): prescription beat outcome here. "Two-accent system" alone produced green on headings. The rule that fixed it was mechanical: white is the default for anything the reader reads, green marks only the small uppercase mono elements that organize the page.
- Preview URL reviewed (yes/no): yes (PR #6 Vercel preview)
- Skipped on purpose: article chrome (wave 4), Tailwind `extendTailwindMerge` (radius tokens are CSS custom properties, not utility classes), `::selection` still a literal amber rgba rather than `var(--accent)`
- Content taxonomy change: n/a
- Context checkpoint: `20260829-024637-wave-3-d10-revised-green-labels-only.md`

### 2026-08-28 — Wave 2 MDX pipeline (merged)

- Wave / PR: wave 2, [PR #4](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/4), merge `b5fe9ef`
- Commits in this slice (count + range): 2 (`8e5f0e4`..`b5fe9ef`, including merge)
- Wall-clock (hours): ~3
- AI tool spend (USD, optional but preferred): not logged
- AGENTS.md edits (what rule landed): n/a (pipeline, not voice)
- Voice rules added or changed: n/a
- Zod / frontmatter schema changes: `writingFrontmatterSchema` in `lib/schemas.ts` (strict; `description`; no `updated`; `build-log` requires `series`+`part`; `teaching` requires `course`)
- Hard component iterations (name + hero / graph): n/a
- Design loop (Figma / MCP / hand polish in `bun dev`): article body gets minimal `.prose h2/ul/code` so MDX is readable; full chrome is wave 4
- Prompting note (outcome vs prescription; what worked): one loader, one schema, existing `/writing/[slug]` URL. Drafts stay off production.
- Preview URL reviewed (yes/no): yes (PR #4 Vercel preview)
- Skipped on purpose: catalog MDX wiring, `updated` field, custom MDX tags beyond `a`, article chrome, tokens, public Fern wave series
- Content taxonomy change: `the-score-is-not-the-work` moved to `content/writing/research/` with `type: research`. Fern wave-1 prose moved from `content/writing/build-logs/` to `artifacts/fern-template-adoption/notes/wave-1.md` (D9).
- Context checkpoint: `20260828-104910-wave-2-merged.md`

### 2026-08-25 — Wave 1 agent OS (merged)

- Wave / PR: wave 1, [PR #3](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/3), merge `416da33`
- Commits in this slice (count + range): 2 (`8683e18`..`416da33`)
- Wall-clock (hours): ~2
- AI tool spend (USD, optional but preferred): not logged
- AGENTS.md edits (what rule landed): authoring rules (tokens, cn(), metadata, sacred URLs, deps, pipeline/catalog boundary); four voice principles; verified proof points; anti-patterns; skills pointer
- Voice rules added or changed: first-person thesis voice; claims before setup; evidence over hype; metrics tied to human usefulness; em dashes allowed when earned; full contract in `.agents/skills/writing/voice-nikhil.md`; dropped unnamed “Fern/Kapil” voice bans; documented that standalone eng posts are `case-study` and that `date` is publication day, not a timestamp
- Zod / frontmatter schema changes: none (D7 target documented in writing skill; loader was wave 2)
- Hard component iterations (name + hero / graph): n/a
- Design loop (Figma / MCP / hand polish in `bun dev`): n/a
- Prompting note (outcome vs prescription; what worked): adapted Fern write-post structure; renamed skill to `writing`; pre-Wave-2 inventory guard prevented false preview promises
- Preview URL reviewed (yes/no): yes (PR #3 preview)
- Skipped on purpose: MDX loader, Zod, routes, tokens, article chrome, catalog edits, seed recategorization
- Content taxonomy change: none (D7 unchanged; type overlays documented in voice contract)
- Context checkpoint: `20260825-154039-wave-1-merged.md`

### 2026-08-24 — Wave 1 prose note (internal)

- Wave / PR: wave 1; later relocated in wave 2
- Commits in this slice (count + range): folded into wave 1 (`8683e18`), path corrected in wave 2
- Wall-clock (hours): n/a (folded into wave 1 ~2h)
- AI tool spend (USD, optional but preferred): not logged
- AGENTS.md edits (what rule landed): n/a
- Voice rules added or changed: n/a
- Zod / frontmatter schema changes: none at draft time
- Hard component iterations (name + hero / graph): n/a
- Design loop (Figma / MCP / hand polish in `bun dev`): n/a
- Prompting note (outcome vs prescription; what worked): cites Fern's published totals as theirs; ours come from this changelog or are marked empty
- Preview URL reviewed (yes/no): n/a (not a page)
- Skipped on purpose: publishing it as `/writing` `build-log` parts
- Content taxonomy change: internal note at `notes/wave-1.md`. D9: no public per-wave series.
- Context checkpoint: claim ledger `build-log-sources.md`

### 2026-08-24 — Wave 0 baseline

- Wave / PR: wave 0, [PR #1](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/1), merge `516dd60`
- Commits in this slice (count + range): 2 (`a8a53aa`..`516dd60`)
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
