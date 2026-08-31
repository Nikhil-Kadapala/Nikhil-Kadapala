# Foundation Wave 2 — component folder contract

Implemented on `feat/foundation-wave-2-component-folders`. Origin plan below.

Origin: `artifacts/codebase-foundation/plan.md` Wave 2. Inventory taken 2026-08-29 against `src/components/` on `main` @ `dfd9ef0`.

## Goal

Stop the flat `src/components/` root. Feature components live under a route surface. Site chrome stays at the root. The contract is written into AGENTS.md so the next file cannot land in the wrong place.

No URL changes. No new dependencies. No Wave 3 conventions check. No Fern Wave 5.

## Contract (D10, settled)

| Location | Owns |
|---|---|
| `src/components/ui/` | shadcn primitives only, kebab-case (`button`, `sheet`) |
| `src/components/home/` | `/` |
| `src/components/writing/` | `/writing` indexes (list + type filters) |
| `src/components/article/` | `/writing/[slug]` essay chrome (TOC, MDX blocks, copy button, MDX map) |
| `src/components/research/` | `/research` catalog + home research viz |
| `src/components/projects/` | `/projects` catalog cards |
| `src/components/` root | Site chrome only: `Navbar`, `Footer`, `icons` |

Naming: PascalCase feature files (`WritingIndex.tsx`, `ProjectCard.tsx`). kebab-case only under `ui/`. One vocabulary (`Dialog`, never `Modal`).

`article/` stays. Folding it into `writing/` would mix index UI with essay chrome and enlarge the PR past a folder contract. Revisit only if `writing/` later grows a second index primitive.

## File moves

| From | To | Importers to update |
|---|---|---|
| `writing-list.tsx` | `writing/WritingIndex.tsx` | `src/app/writing/page.tsx`, `src/app/writing/type/[type]/page.tsx` |
| `ProjectCard.tsx` | `projects/ProjectCard.tsx` | `src/app/projects/page.tsx` |
| `KnowledgeGraph.tsx` | `research/KnowledgeGraph.tsx` | `src/components/home/HomePage.tsx` |
| `mdx-components.tsx` | `article/mdx-components.tsx` | `src/lib/writing.ts` |

Stay put: `Navbar`, `Footer`, `icons`, `home/HomePage`, `article/{ArticleToc,CodeCopyButton,blocks}`, `ui/*`.

Export names stay (`WritingIndexView`, `loadWritingListItems`, `ProjectCard`, `KnowledgeGraph`, `mdxComponents`). Only the path and the `writing-list` filename change.

## Dead homepage museum (D11, settled: drop)

`CodeWorkbench` and `ResearchMap` have zero importers. Home uses `KnowledgeGraph`. Fern Wave 1 deleted them once and restored them from `main`; they never got wired back. Park is rejected.

On implement:

- Delete `src/components/CodeWorkbench.tsx` and `src/components/ResearchMap.tsx`.
- Delete CSS that only they use: `.run-inspector` and related inspector rules, `.map` / `.map-cell` if present. Keep `.kgraph*`. Confirm `.live-dot` has no other live caller before deleting.

## AGENTS.md

Add authoring rule 6 after rule 5:

- Folder table above.
- New feature UI goes in the matching surface folder, not the component root.
- `ui/` stays primitives.
- Root stays chrome.

Mirror the same sentence in `CLAUDE.md` only if that file still duplicates the authoring rules. Do not add a third copy to README (Wave 5).

## Out of scope

- Catalog pages that export `title` only (Wave 3).
- Unused `@mdx-js/loader` / `@mdx-js/react` (Wave 4, done).
- Architecture map in README (Wave 5).
- Untracked leftover `app/` and `components/` at the repo root on this machine. They are not in git. Do not edit them. Local delete is hygiene, not this PR.

## Test plan

- `bun run typecheck`
- `bun run lint`
- `bun run build`
- Browser: `/`, `/writing`, `/writing/type/case-study`, one essay, `/research`, `/projects`, mobile nav. Confirm KnowledgeGraph still mounts on home.

## PR shape

One PR from a `feat/foundation-wave-2-component-folders` branch. Commit message: `refactor(components): group UI by route surface`.
