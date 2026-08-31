# Codebase foundation — changelog

## 2026-08-29

- Plan created. Origin: reference architecture review of `resalign/frontend` (canvas artifact) + direct audit of this repo.
- Baseline audit results: zero `any`, zero raw hex in `.tsx`, zero `text-[Npx]`, 6 justified client components, zod a direct dependency.
- Gaps at plan time: 3 routes missing metadata, no `not-found`/`error`/`loading` boundaries, 9 loose files at `components/` root, oxlint on defaults, dual MDX stack installed. The "no CI" gap was already wrong: Fern Wave 0 had shipped `.github/workflows/ci.yml`.
- Waves 0–5 defined. Wave 0 (commit navbar scroll-motion work) gated the rest.
- Wave 0 complete (`ff27b45`): navbar scroll motion committed. Reconciled a three-way value drift before committing — DESIGN.md said 86%/16px/24px, a dead CSS rule said 66%, the live rule (newest edit) said 58%/24px with a 48px threshold. User picked code-wins: 58% / translateY(24px) / 48px threshold; DESIGN.md updated to match and the dead rule removed. Base `width: 100%` folded into the main `.site-header-shell` rule so the width-interpolation fix survives.
- Plan committed as `47ade71`.
- Same-day site work that is not a numbered foundation wave: homepage motion + `/writing/type/[type]` + unlisted teaching (`b58bfd6`).
- `src/` move (`89479f4`): application code under `src/app`, `src/components`, `src/lib`. D9.
- Wave 1 complete in the same commit: homepage metadata, catalog `generateMetadata`, `error.tsx`, `not-found.tsx`, `writing/[slug]/loading.tsx`.
- Trackers reconciled to `main` @ `89479f4`. Next: Wave 2 (component folder contract).
- Wave 2 implemented on `feat/foundation-wave-2-component-folders`: surface folders, D11 drop of `CodeWorkbench` / `ResearchMap` plus unused inspector/map CSS (`.live-dot` kept for home status), AGENTS.md / CLAUDE.md authoring rule 6.

## 2026-08-30

- Wave 5 (contributor docs): `AGENTS.md` is a ≤50-line resolver; how-to lives in `docs/stack.md`, `docs/architecture.md`, `docs/authoring.md`. `CLAUDE.md` is a one-line `@AGENTS.md` bridge. CI runs `scripts/check-agent-index.test.sh` then `scripts/check-agent-index.sh` before bun install. Root `README.md` stays the GitHub profile bio. Next: Wave 3 (conventions check + PR template).
