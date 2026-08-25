# Fern template adoption — changelog

Log **from day one**. Fern’s post is credible because it has numbers (weeks, commits, spend, iterations on one animation). Reconstructing that later is guesswork. Series claims map to sources in [build-log-sources.md](./build-log-sources.md).

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
| Wave PRs merged | 1 (wave 0) |
| Commits since adoption start | pending (wave 1 in progress) |
| Estimated hours | ~5 (briefing + D7/D8 + wave 1) |
| AI spend | not logged yet |
| AGENTS.md rewrites | 2 (wave 0 thin stack; wave 1 full authoring + voice) |
| Zod schema versions | 0 (pipeline not imported) |
| Hero / graph polish passes | 0 this adoption (pre-adoption work on `main`) |

## Log

### 2026-08-24 — Wave 1 agent OS (this change)

- Wave / PR: wave 1, branch `chore/fern-adoption-wave-1` (not yet a PR)
- Commits in this slice (count + range): pending
- Wall-clock (hours): ~2
- AI tool spend (USD, optional but preferred): not logged
- AGENTS.md edits (what rule landed): authoring rules (tokens, cn(), metadata, sacred URLs, deps, pipeline/catalog boundary); four voice principles; verified proof points; anti-patterns; skills pointer
- Voice rules added or changed: first-person thesis voice; claims before setup; evidence over hype; metrics tied to human usefulness; em dashes allowed when earned; full contract in `.agents/skills/writing/voice-nikhil.md`; dropped unnamed “Fern/Kapil” voice bans; documented that standalone eng posts are `case-study` and that `date` is publication day, not a timestamp
- Zod / frontmatter schema changes: none (D7 target documented in writing skill; loader is wave 2)
- Hard component iterations (name + hero / graph): n/a
- Design loop (Figma / MCP / hand polish in `bun dev`): n/a
- Prompting note (outcome vs prescription; what worked): adapted Fern write-post structure; renamed skill to `writing`; pre-Wave-2 inventory guard prevents false preview promises
- Preview URL reviewed (yes/no): pending CI
- Skipped on purpose: MDX loader, Zod, routes, tokens, article chrome, catalog edits, seed recategorization
- Content taxonomy change: none (D7 unchanged; type overlays documented in voice contract)
- Context checkpoint: saved at wave 1 implementation boundary

### 2026-08-24 — Series part 1 drafted (inventory)

- Wave / PR: wave 1 working tree; file is not a page until wave 2
- Commits in this slice (count + range): pending
- Wall-clock (hours): n/a (folded into wave 1 ~2h)
- AI tool spend (USD, optional but preferred): not logged
- AGENTS.md edits (what rule landed): n/a
- Voice rules added or changed: n/a
- Zod / frontmatter schema changes: none
- Hard component iterations (name + hero / graph): n/a
- Design loop (Figma / MCP / hand polish in `bun dev`): n/a
- Prompting note (outcome vs prescription; what worked): part 1 cites Fern's published totals as theirs; ours come from this changelog or are marked empty
- Preview URL reviewed (yes/no): no (inventory)
- Skipped on purpose: live `/writing/[slug]`; inventing spend or commit counts
- Content taxonomy change: first `build-log` file, series "Fern adoption", slug `borrow-the-os-not-the-look`
- Context checkpoint: claim ledger `build-log-sources.md`

### 2026-08-24 — Wave 0 baseline

- Wave / PR: wave 0, on `main` (PR number not recorded in this log)
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
