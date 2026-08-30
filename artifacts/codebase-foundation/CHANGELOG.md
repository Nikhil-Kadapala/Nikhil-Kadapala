# Codebase foundation — changelog

## 2026-08-29

- Plan created. Origin: reference architecture review of `resalign/frontend` (canvas artifact) + direct audit of this repo.
- Baseline audit results: zero `any`, zero raw hex in `.tsx`, zero `text-[Npx]`, largest file 163 lines, 6 justified client components, zod a direct dependency.
- Gaps confirmed: 3 routes missing metadata (`app/page.tsx`, `research/[slug]`, `projects/[slug]`), no `not-found`/`error`/`loading` boundaries, 9 loose files at `components/` root, oxlint on defaults, no CI workflow, dual MDX stack installed.
- Waves 0–5 defined. Wave 0 (commit navbar scroll-motion work) gates the rest.
- Wave 0 complete: navbar scroll motion committed. Reconciled a three-way value drift before committing — DESIGN.md said 86%/16px/24px, a dead CSS rule said 66%, the live rule (newest edit) said 58%/24px with a 48px threshold. User picked code-wins: 58% / translateY(24px) / 48px threshold; DESIGN.md updated to match and the dead rule removed. Base `width: 100%` folded into the main `.site-header-shell` rule so the width-interpolation fix survives.
