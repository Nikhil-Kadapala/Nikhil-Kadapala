# Changelog

Timeline of this repo: GitHub profile README plus the personal site at [nikhill.me](https://nikhill.me).

Newest first. Add an entry when something ships (merge to `main`, or a notable unreleased change on a wave PR). Fern adoption *metrics* (hours, spend, iterations) live in [`artifacts/fern-template-adoption/CHANGELOG.md`](artifacts/fern-template-adoption/CHANGELOG.md), not here.

## Unreleased

## 2026-08-28 — Fern adoption wave 2

MDX writing pipeline. One loader, one schema, four content types. [PR #4](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/4).

### Added

- Wave 2 MDX pipeline: Zod frontmatter schema (`lib/schemas.ts`), one loader (`lib/writing.ts`), `generateMetadata` on `/writing/[slug]`, GFM via `remark-gfm`
- Writing index filters by `type`; RSS and sitemap read published posts from the loader (`description`, not `excerpt`)
- `the-score-is-not-the-work` recategorized to `content/writing/research/` (`type: research`)

### Changed

- Draft posts (`draft: true`) render on local/preview only. Production index, RSS, and sitemap omit them.
- Fern adoption is tracked in `artifacts/fern-template-adoption/` (changelog + `notes/`). No public per-wave series. One `case-study` after the last wave.

## 2026-08-25 — Fern adoption wave 1

Agent OS. No visual import.

### Added

- Expanded `AGENTS.md` with authoring rules, voice principles, proof points, and anti-patterns
- `writing` skill (`.agents/skills/writing/`) adapted from Fern's `write-post` workflow
- `voice-nikhil.md` — long-form voice contract with four type overlays and verified proof points

### Changed

- `next-mdx-remote` 5.0.0 → 6.0.0. Vercel refused production builds on CVE-2026-0969. Package unused until wave 2; bump unblocked deploy.
- Vercel Web Analytics via `<Analytics />` in the root layout. No extra env vars.

## 2026-08-24 — Fern adoption wave 0

Baseline for borrowing Fern’s workflow, not its look. Live routes still match the Aug 23 site.

### Added

- Agent skills under `.agents/skills/` (including `/context-save` and `/context-restore`)
- CI: typecheck, lint, and build on pull requests
- shadcn primitives (`button`, `sheet`) and `cn()` in `lib/utils.ts`
- Seed MDX under `content/{writing,research,projects}/` (inventory; not wired to routes)
- Adoption tracker: `artifacts/fern-template-adoption/`
- Thin `AGENTS.md` / `CLAUDE.md` (stack + wave cadence)

### Changed

- `next.config.ts` stays on Vercel preview (no static export)
- Locked D1–D8: existing URLs, dark only, DESIGN.md token values, bun + Next 15, one `/writing` pipeline with `type` in a later wave
- Canonical site URL is `https://nikhill.me` in the profile README. App origin is resolved at build time (`NEXT_PUBLIC_SITE_URL`, then Vercel production/preview host, then localhost). Layout, sitemap, robots, and RSS no longer hardcode `github.io` or the domain.

### Removed

- Three-tree MDX page rewrite (would have been deleted in wave 2)
- `CONTRIBUTING.md`. Solo site; operator rules stay in `AGENTS.md` and the adoption plan.

## 2026-08-23 — Portfolio site

The repo stopped being a profile README only.

### Added

- Next.js App Router site with the measured Mastra-derived design system (`DESIGN.md`)
- Public routes: `/`, `/writing`, `/research`, `/projects`, `/about`, `/github`
- TypeScript catalogs in `lib/content.ts` (no MDX loader yet)

## 2026-08-13 — Profile README

### Added

- GitHub profile README: bio, research, ResAlign, CheckThat!, what’s next
