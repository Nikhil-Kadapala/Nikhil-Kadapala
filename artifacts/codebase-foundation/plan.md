---
title: Codebase foundation
status: wave-2-next
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

Application code lives under `src/app`, `src/components`, and `src/lib` (`89479f4`). Fern adoption waves 0–4 are merged; this track is the post-Fern site work. Fern Wave 5 (optional skills) is a separate PR after this track's current wave, not folded in.

## Settled decisions

| ID | Call | Meaning |
|---|---|---|
| D1 | Keep RSC-first | 6 client components, all justified (SiteHeader, ArticleToc, CodeCopyButton, sheet, HomePage, KnowledgeGraph). New interactivity gets a leaf client component, never a client page. |
| D2 | Keep tokens-once | `src/app/globals.css` (`@theme inline`) + `DESIGN.md` values are the only sources. Audit found zero raw hex, zero `text-[Npx]`, zero `any` — the guardrails in wave 3 keep it that way. |
| D3 | No second token file | No `designOS.ts`-style typed token object. ResAlign's sat unused while CSS vars did the work; two sources of truth guarantee drift. |
| D4 | One writing pipeline + catalogs | Unchanged from the Fern plan. Catalogs (`content/research/`, `content/projects/`) are not essays. |
| D5 | Small composed components | Split along data-vs-presentational seams before a file crosses ~300 lines. |
| D6 | `cn()` is the only className assembler | Already true here. Wave 3 lints against template-string classNames ever starting. |
| D7 | Wave-sized PRs | Each wave below is one PR. One unit of work at a time; no second atomic task until the current one is merged. |
| D8 | No Storybook, no BFF patterns | `ui/` is 2 primitives; a registry is overkill. The only route handlers (`rss.xml`, `content-assets`) are fine as-is. |
| D9 | `src/` layout | App Router source under `src/`. Config, `content/`, `public/`, and docs stay at the repo root. `@/*` → `src/*`. |

## Failure modes this plan inoculates against (from the ResAlign review)

| ResAlign disease | Status here |
|---|---|
| 0/34 pages export metadata; 0 loading/error/not-found boundaries | **Closed (Wave 1).** Homepage, catalog slugs, `error.tsx`, `not-found.tsx`, `writing/[slug]/loading.tsx` are on `main`. Some catalog pages still export `title` only; Wave 3 should require `description` too. |
| Flat `components/` root sprawl | **Open (Wave 2).** 9 files at `src/components/` root. `article/` and `home/` already exist. |
| Conventions that aren't linted decay | **Partly closed.** `.github/workflows/ci.yml` runs typecheck + lint + build on PRs and `main` (Fern Wave 0). `.oxlintrc.json` already enables typescript/react/nextjs plugins and the correctness category. Still missing: conventions check (no raw hex, no `text-[Npx]`, metadata required) and a PR template. |
| Twin MDX pipelines drifting apart | **Open (Wave 4).** Writing uses `next-mdx-remote/rsc`. `@mdx-js/loader` and `@mdx-js/react` are installed and unused. |
| Copy-paste helpers diverging | Not present — `src/lib/` modules are single-responsibility. Keep it. |

## Wave 0 — Land in-flight work (done)

Navbar scroll-motion committed as `ff27b45`. Live values: 58% width, `translateY(24px)`, 48px threshold. `DESIGN.md` matches. Dead 66% rule removed.

## Wave 1 — Correctness gaps (done)

Landed in `89479f4` with the `src/` move.

- `metadata` on `src/app/page.tsx`
- `generateMetadata` on `src/app/research/[slug]/page.tsx` and `src/app/projects/[slug]/page.tsx`
- `src/app/not-found.tsx`, `src/app/error.tsx`, `src/app/writing/[slug]/loading.tsx`

## Wave 2 — Component folder contract (next, one PR)

- Contract: `src/components/ui/` is shadcn primitives only (kebab-case); `src/components/<surface>/` groups feature components by route surface (`article/`, `home/` exist; add `writing/`, `research/`, `projects/`); root of `src/components/` is site chrome only (`SiteHeader`, `SiteFooter`).
- Moves: `writing-list.tsx` → `writing/`, `ProjectCard.tsx` → `projects/`, `ResearchMap.tsx` + `KnowledgeGraph.tsx` → `research/`. `CodeWorkbench.tsx` and `ResearchMap.tsx` currently have no importers; park under `research/` or drop in this PR.
- Naming: PascalCase components, kebab-case `ui/`, one vocabulary (`Dialog`, never `Modal`). Codify in the AGENTS.md authoring rules.

## Wave 3 — Guardrails (one PR)

- Conventions check for rules oxlint does not express: no raw hex in `.tsx`, no `text-[Npx]`, every `page.tsx` contains `metadata`/`generateMetadata` with `description`.
- PR template with the existing checklist.
- Do not add a second CI workflow. Extend `.github/workflows/ci.yml` with the conventions step. oxlint plugins + correctness are already on.

## Wave 4 — Dependency hygiene (one PR)

- Keep `next-mdx-remote`. Drop unused `@mdx-js/loader` and `@mdx-js/react`.
- "No new deps without asking" stays as-is.

## Wave 5 — Contributor docs (one PR)

- Root `README.md` is the GitHub profile bio. Add an architecture map (routes, content pipeline, catalogs), how to add a post / page / catalog entry, and the commands block — without turning it into a third source of design truth.
- `DESIGN.md` stays token source of truth; AGENTS.md stays the agent contract.

## Sequencing

Waves 0–1 are on `main`. **Next is Wave 2.** Wave 3 lands before content volume grows. Waves 4–5 slot in whenever. Fern Wave 5 stays a separate PR.
