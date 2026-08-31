---
title: Codebase foundation
status: wave-4-done
updated: 2026-08-31
owner: Nikhil Kadapala
changelog: ./CHANGELOG.md
---

# Codebase foundation

Living plan. Update this file when a decision, wave, or scope item changes.

Origin: a reference architecture review of `resalign/frontend` (306 TS/TSX files) identified failure modes to avoid here; a direct audit of this repo confirmed what already holds. The review artifact: `~/.cursor/projects/Users-nikhilk-gitrepos-Nikhil-Kadapala/canvases/resalign-frontend-arch-review.canvas.tsx`.

**Process for every wave:** plan → review → implement → test (`typecheck` + `lint` + `build`) → PR → review → merge.

**Context:** `/context-save` at each meaningful boundary. Start the next session with `/context-restore`. Do not continue a wave across a compaction cliff.

**Do not implement a wave in the same session that only planned it.** Fresh session after restore.

Application code lives under `src/app`, `src/components`, and `src/lib` (`89479f4`). Fern adoption waves 0–4 are merged; this track is the post-Fern site work. Fern Wave 5 (optional skills) is a separate PR, not folded into foundation waves.

## Settled decisions

| ID | Call | Meaning |
|---|---|---|
| D1 | Keep RSC-first | 6 client components, all justified (Navbar, ArticleToc, CodeCopyButton, sheet, HomePage, KnowledgeGraph). New interactivity gets a leaf client component, never a client page. |
| D2 | Keep tokens-once | `src/app/globals.css` (`@theme inline`) + `DESIGN.md` values are the only sources. Audit found zero raw hex, zero `text-[Npx]`, zero `any` — the guardrails in wave 3 keep it that way. |
| D3 | No second token file | No `designOS.ts`-style typed token object. ResAlign's sat unused while CSS vars did the work; two sources of truth guarantee drift. |
| D4 | One writing pipeline + catalogs | Unchanged from the Fern plan. Catalogs (`content/research/`, `content/projects/`) are not essays. |
| D5 | Small composed components | Split along data-vs-presentational seams before a file crosses ~300 lines. |
| D6 | `cn()` is the only className assembler | Already true here. Wave 3 lints against template-string classNames ever starting. |
| D7 | Wave-sized PRs | Each wave below is one PR. One unit of work at a time; no second atomic task until the current one is merged. |
| D8 | No Storybook, no BFF patterns | `ui/` is 2 primitives; a registry is overkill. The only route handlers (`rss.xml`, `content-assets`) are fine as-is. |
| D9 | `src/` layout | App Router source under `src/`. Config, `content/`, `public/`, and docs stay at the repo root. `@/*` → `src/*`. |
| D10 | Folder contract | `ui/` primitives; surfaces `home/`, `writing/`, `article/`, `research/`, `projects/`; root is `Navbar`, `Footer`, `icons`. Keep `article/`. Procedure lives in `docs/authoring.md`; `AGENTS.md` only dispatches there. |
| D11 | Drop dead home museum | Delete `CodeWorkbench` and `ResearchMap` plus unused inspector/map CSS. Do not park. Home viz is `KnowledgeGraph`. |

## Failure modes this plan inoculates against (from the ResAlign review)

| ResAlign disease | Status here |
|---|---|
| 0/34 pages export metadata; 0 loading/error/not-found boundaries | **Closed (Wave 1).** Homepage, catalog slugs, `error.tsx`, `not-found.tsx`, `writing/[slug]/loading.tsx` are on `main`. Some catalog pages still export `title` only; Wave 3 should require `description` too. |
| Flat `components/` root sprawl | **Closed (Wave 2).** Surfaces own their UI. Root is chrome only. |
| Conventions that aren't linted decay | **Closed (Wave 3).** `scripts/check-conventions.sh` fails raw hex, `text-[Npx]`, and string-built classNames in `.tsx`, and requires a non-empty `description` on every `page.tsx`. `.github/PULL_REQUEST_TEMPLATE.md` plus a CI step before `bun install`. |
| Twin MDX pipelines drifting apart | **Closed (Wave 4).** Writing uses `next-mdx-remote/rsc` as data (`fs` + Zod). Unused `@mdx-js/loader` and `@mdx-js/react` removed. Do not add `@next/mdx`. |
| Copy-paste helpers diverging | Not present — `src/lib/` modules are single-responsibility. Keep it. |

## Wave 0 — Land in-flight work (done)

Navbar scroll-motion committed as `ff27b45`. Live values: 58% width, `translateY(24px)`, 48px threshold. `DESIGN.md` matches. Dead 66% rule removed.

## Wave 1 — Correctness gaps (done)

Landed in `89479f4` with the `src/` move.

- `metadata` on `src/app/page.tsx`
- `generateMetadata` on `src/app/research/[slug]/page.tsx` and `src/app/projects/[slug]/page.tsx`
- `src/app/not-found.tsx`, `src/app/error.tsx`, `src/app/writing/[slug]/loading.tsx`

## Wave 2 — Component folder contract (done)

Detail: `artifacts/codebase-foundation/notes/wave-2.md`. Merged as PR #10.

- **D10 settled:** `ui/` is shadcn primitives (kebab-case). Surfaces: `home/`, `writing/` (indexes), `article/` (essay chrome + MDX map), `research/`, `projects/`. Root is chrome only: `Navbar`, `Footer`, `icons`.
- **D11 settled:** drop `CodeWorkbench` and `ResearchMap` plus unused inspector/map CSS. Do not park or remount.
- Moves: `writing-list.tsx` → `writing/WritingIndex.tsx`; `ProjectCard.tsx` → `projects/`; `KnowledgeGraph.tsx` → `research/`; `mdx-components.tsx` → `article/`.
- Keep `article/`. Do not fold it into `writing/`.
- D10 lives in `docs/authoring.md`; `AGENTS.md` only dispatches there.

## Wave 3 — Guardrails (done)

Visual brief: `artifacts/codebase-foundation/show-me-wave-3-plan.html`.
Eng review (2026-08-30): scope A, scan 1B, CI order 2B, copy header 3B, grep set 4A, empty description 5A.

- Conventions check cloned from `scripts/check-agent-index.sh` (copy `ROOT`/`fail`, do not extract a lib, do not edit the agent-index scripts).
- Scan `src/**/*.tsx` for: raw hex, `text-[Npx]`, `className={\``, `className` string concat, `cn(\``. Hex in comments fails. Do not scan `.ts` (`src/lib/shiki.ts` stays legal).
- Scan `src/app/**/page.tsx` for `metadata` or `generateMetadata` plus a non-empty `description` (whitespace-only fails).
- Title-only pages that must gain `description` in this PR: `research/page.tsx`, `projects/page.tsx`, `github/page.tsx`, `about/page.tsx`.
- Fixture tests in `scripts/check-conventions.test.sh` (every fail case above + clean pass + hex-only-in-`.ts` pass).
- `package.json` script `check:conventions` (test then live). Document in `docs/stack.md`.
- PR template with the existing checklist plus these conventions.
- Same CI job, no second workflow. Run test+live **before** `bun install`, next to agent-index.
- No oxlint JS plugins. No new npm deps.
- Update this plan + `CHANGELOG.md` when the wave lands. Done in this PR.

```
PR / push → ci.yml job check
  check-agent-index.test.sh + check-agent-index.sh
  check-conventions.test.sh + check-conventions.sh
  bun install → typecheck → lint → build
```

## Wave 4 — Dependency hygiene (done)

- Keep `next-mdx-remote`. Drop unused `@mdx-js/loader` and `@mdx-js/react`.
- Local `.mdx` is still compiled as data in `src/lib/writing.ts` (`compileMDX`), not as bundler modules. Do not add `@next/mdx`.
- "No new deps without asking" stays as-is.

## Wave 5 — Contributor docs (done)

Root `README.md` stays the GitHub profile bio. Add `docs/architecture.md` (routes, content pipeline, catalogs, how to add a post/page/catalog entry), `docs/stack.md` (commands, deps), and `docs/authoring.md` (tokens, `cn()`, folder contract). `AGENTS.md` is a short resolver into those files plus skills and artifacts — not a dump of the rules. `DESIGN.md` stays token source of truth. `CLAUDE.md` is a one-line `@AGENTS.md` bridge. CI: `scripts/check-agent-index.sh` (+ fixture tests) as the first job step.

## Sequencing

Waves 0–5 are done. Fern Wave 5 (optional skills) stays a separate PR.

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | — |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | — | — |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 1 | CLEAR | 5 issues resolved, 0 critical gaps, 0 unresolved |
| Design Review | `/plan-design-review` | UI/UX gaps | 0 | — | — |

- **OUTSIDE VOICE:** Claude subagent (Codex CLI blocked). Said drop the checker; user kept it (B).
- **CROSS-MODEL:** Disagreed on building the bash check. Locked: keep the checker.
- **UNRESOLVED:** 0
- **VERDICT:** ENG CLEARED — ready to implement in a fresh session.
