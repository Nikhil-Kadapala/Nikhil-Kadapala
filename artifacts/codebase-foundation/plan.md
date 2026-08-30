---
title: Codebase foundation
status: planned
updated: 2026-08-29
owner: Nikhil Kadapala
changelog: ./CHANGELOG.md
---

# Codebase foundation

Living plan. Update this file when a decision, wave, or scope item changes.

Origin: a reference architecture review of `resalign/frontend` (306 TS/TSX files) identified failure modes to avoid here; a direct audit of this repo confirmed what already holds. The review artifact: `~/.cursor/projects/Users-nikhilk-gitrepos-Nikhil-Kadapala/canvases/resalign-frontend-arch-review.canvas.tsx`.

**Process for every wave:** plan → review → implement → test (`typecheck` + `lint` + `build`) → PR → review → merge.

**Context:** `/context-save` at each meaningful boundary. Start the next session with `/context-restore`. Do not continue a wave across a compaction cliff.

**Do not implement a wave in the same session that only planned it.** Fresh session after restore.

## Settled decisions

| ID | Call | Meaning |
|---|---|---|
| D1 | Keep RSC-first | 6 client components today, all justified (SiteHeader, ArticleToc, CodeCopyButton, sheet, HomePage, KnowledgeGraph). New interactivity gets a leaf client component, never a client page. |
| D2 | Keep tokens-once | `app/globals.css` (`@theme inline`) + `DESIGN.md` values are the only sources. Audit found zero raw hex, zero `text-[Npx]`, zero `any` — the guardrails in wave 3 keep it that way. |
| D3 | No second token file | No `designOS.ts`-style typed token object. ResAlign's sat unused while CSS vars did the work; two sources of truth guarantee drift. |
| D4 | One writing pipeline + catalogs | Unchanged from the Fern plan. Catalogs (`content/research/`, `content/projects/`) are not essays. |
| D5 | Small composed components | 163 lines is today's max. ResAlign's 1,011-line `LearningPathView` is the anti-pattern. Split along data-vs-presentational seams before a file crosses ~300 lines. |
| D6 | `cn()` is the only className assembler | Already true here. ResAlign had 179 template-string classNames across 54 files; wave 3 lints against that ever starting. |
| D7 | Wave-sized PRs | Each wave below is one PR. One unit of work at a time; no second atomic task until the current one is merged. |
| D8 | No Storybook, no BFF patterns | `ui/` is 2 primitives; a registry is overkill. The only route handlers (`rss.xml`, `content-assets`) are fine as-is. |

## Failure modes this plan inoculates against (from the ResAlign review)

| ResAlign disease | Exposure here today |
|---|---|
| 0/34 pages export metadata; 0 loading/error/not-found boundaries | 3 routes missing metadata (`app/page.tsx`, `research/[slug]`, `projects/[slug]`); no boundaries anywhere |
| Flat `components/` root sprawl (17 loose files, mixed concerns) | 9 loose root files and three empty writing folders about to fill |
| Conventions that aren't linted decay | `oxlint` runs with defaults only; no `.github/workflows/` despite CLAUDE.md claiming "CI + Vercel preview" |
| Twin MDX pipelines drifting apart | Both `@mdx-js/loader` and `next-mdx-remote` installed |
| Copy-paste helpers diverging | Not present — `lib/` modules are single-responsibility. Keep it. |

## Wave 0 — Land in-flight work (prerequisite)

The navbar scroll-motion changes (`DESIGN.md`, `app/globals.css`, `components/SiteHeader.tsx`) are uncommitted. Review in `bun dev` (66% width, 16px offset, desktop + mobile), then commit. Nothing else starts on a dirty tree.

## Wave 1 — Correctness gaps (one PR)

- Add `metadata` to `app/page.tsx` (homepage currently inherits only the root layout title).
- Add `generateMetadata` to `app/research/[slug]/page.tsx` and `app/projects/[slug]/page.tsx` — `writing/[slug]` already has it; catalogs match.
- Add `app/not-found.tsx` and `app/error.tsx`; add `loading.tsx` on `writing/[slug]` where MDX compilation is the slow path.

## Wave 2 — Component folder contract (docs + light moves, one PR)

- Contract: `components/ui/` is shadcn primitives only (kebab-case); `components/<surface>/` groups feature components by route surface (`article/`, `home/` exist; add `writing/`, `research/`, `projects/`); root of `components/` is site chrome only (`SiteHeader`, `SiteFooter`).
- Moves: `writing-list.tsx` → `writing/`, `ProjectCard.tsx` → `projects/`, `ResearchMap.tsx` + `KnowledgeGraph.tsx` → `research/`, `CodeWorkbench.tsx` → surface by usage.
- Naming: PascalCase components, kebab-case `ui/`, one vocabulary (`Dialog`, never `Modal`). Codify in the AGENTS.md authoring rules.

## Wave 3 — Guardrails (one PR)

- `oxlint` config enabling its correctness/react rulesets (defaults-only today).
- `scripts/check-conventions.ts` (or grep-based CI step) for rules oxlint can't express: no raw hex in `.tsx`, no `text-[Npx]`, every `page.tsx` contains `metadata`/`generateMetadata`.
- `.github/workflows/ci.yml`: `typecheck` + `lint` + conventions check + `build` on PRs — makes the "CI + Vercel preview, then merge" rule real.
- PR template with the existing checklist.

## Wave 4 — Dependency hygiene (one PR)

- Resolve the dual MDX stack: keep whichever of `@mdx-js/loader` + `@mdx-js/react` vs `next-mdx-remote` the writing pipeline actually uses; drop the other.
- "No new deps without asking" stays as-is.

## Wave 5 — Contributor docs (one PR)

- Verify `README.md` exists; if not, write it: architecture map (routes, content pipeline, catalogs), how to add a post / page / catalog entry, commands block.
- `DESIGN.md` stays token source of truth; AGENTS.md stays the agent contract. No third doc.

## Sequencing

Waves 1 and 2 are independent. Wave 3 lands before content volume grows (three empty `writing/` type folders). Waves 4–5 slot in whenever. Wave 0 gates everything.
