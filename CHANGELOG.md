# Changelog

Timeline of this repo: GitHub profile README plus the personal site at [nikhill.me](https://nikhill.me).

Newest first. Add an entry when something ships (merge to `main`, or a notable unreleased change on a wave PR). Fern adoption *metrics* (hours, spend, iterations) live in [`artifacts/fern-template-adoption/CHANGELOG.md`](artifacts/fern-template-adoption/CHANGELOG.md), not here.

## Unreleased

- Favicon uses the navbar Pursuit mark (`favicon.ico`, `icon.png`).
- Buttons are the shadcn `Button` primitive (`default`, `quiet`, `ghost`, `link`). Navbar GitHub uses `quiet` with the same `--border-strong` as Card.
- Catalog tiles use the official shadcn/Radix Card tree (`CardHeader` / `Title` / `Description` / `Action` / `Content` / `Footer`). No custom `card-link` API.
- Rename site chrome: `SiteHeader` → `Navbar`, `SiteFooter` → `Footer`. Navbar/footer layout and scroll motion live on the components (Tailwind + React); tokens stay in `globals.css`.
- Foundation Wave 4: drop unused `@mdx-js/loader` and `@mdx-js/react`. Writing stays on `next-mdx-remote/rsc`.
- Foundation Wave 3: `check:conventions` fails hex / `text-[Npx]` / string-built classNames in `.tsx` and requires a non-empty page `description`. PR template. CI runs it after agent-index, before bun install.
- Foundation Wave 5: `AGENTS.md` is a short resolver; how-to lives in `docs/{stack,architecture,authoring}.md`. `CLAUDE.md` is `@AGENTS.md`. CI checks the index before bun install.
- Foundation Wave 2: feature UI grouped by route surface (`home/`, `writing/`, `article/`, `research/`, `projects/`). Root chrome only. Dead `CodeWorkbench` / `ResearchMap` removed.
- Tracker docs reconciled to `main` @ `89479f4`: Fern waves 0–4 merged, foundation Waves 0–1 done

## 2026-08-29 — Source under `src/`

Next.js application code lives under `src/app`, `src/components`, and `src/lib`. Project plumbing, `content/`, `public/`, and docs stay at the repo root. `@/*` maps to `src/*`. `89479f4`.

### Added

- `src/app/error.tsx`, `src/app/not-found.tsx`, and `src/app/writing/[slug]/loading.tsx`
- `generateMetadata` on `/research/[slug]` and `/projects/[slug]`; homepage `metadata` with `title` and `description`

### Changed

- Token and component paths in `AGENTS.md`, `CLAUDE.md`, and `DESIGN.md` now point at `src/`

This also closes foundation Wave 1 (correctness gaps). The foundation plan is at `artifacts/codebase-foundation/`.

## 2026-08-29 — Navbar scroll shell

The header narrows on scroll. `ff27b45`.

### Changed

- Scrolled navbar: 58% width, `translateY(24px)`, 48px threshold. `DESIGN.md` matches the live CSS. Dead 66% rule removed.

## 2026-08-29 — Homepage motion and writing type indexes

Gradient canvas, per-block homepage motion, and type indexes at `/writing/type/[type]`. `b58bfd6`.

### Added

- `/writing/type/[type]` indexes. `middleware.ts` 308s `/writing?type=` to the new path. `/writing/type` redirects to `/writing`.
- `UNLISTED_WRITING_TYPES`: `teaching` stays reachable by URL and is omitted from the writing index, public filters, sitemap, and RSS. Those pages send `noindex, nofollow`.
- Shared motion helpers in `src/lib/animations.ts`. Homepage markup lives in `src/components/home/HomePage.tsx`.

### Changed

- Nav label Blog → Writing. Unified `--canvas-gradient` on `body`.

## 2026-08-29 — Fern adoption wave 4

Article chrome on `/writing/[slug]`. [PR #9](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/9), merge `e03804a`.

### Added

- TOC, progress ring, callouts, Shiki (three-token theme), tables, footnotes
- Optional frontmatter `cover` (relative path under `content/assets/`), served at `/content-assets/...`

### Changed

- D10 green on small uppercase mono labels in the article chrome (TOC heading, callout label, table `th`, figure index, footnotes heading). Amber for TOC `.active`, links, footnote refs, copy hover, and focus.
- `--radius-lg` stays 20px. Article chrome uses `--radius-md` 8px, `--radius-card` 12px, `--radius-xl` 14px.

Catalog `/research/[slug]` stays a publication record. The design-handoff HTML was deleted after the port.

## 2026-08-29 — Fern adoption wave 3

Two-accent color system and token reconciliation. [PR #6](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/6).

### Added

- `--green` (`oklch(0.4684 0.0905 147.75)`) for structural labels: `.eyebrow`, `.tag`, `.section-index`, `.run-summary .mono`, `.primitive-grid span`, `.artifact-row .tag`, `.paper-meta` and `.kgraph-foot` first spans, `.inspector-tabs .active::after`
- Radius tokens `--radius-sm` (6px), `--radius` (10px), `--radius-lg` (20px), and `--ease-drawer`

### Changed

- `--accent` (`#f0a35a`) is now attention-only: links, focus rings, selection, blockquote accent, hover, active filters, kgraph interactive states
- `--ease-out` and `--ease-in-out` updated to the measured Mastra curves in `DESIGN.md`
- `.page-head .eyebrow` added so the eyebrow beats `.page-head p` on specificity

Headings, nav items, and card titles stay white. Green marks only the small uppercase mono elements that organize a page, never anything the reader reads. `--green` is distinct from `--success` (`#4ade80`).

### Fixed

- Hydration mismatch on `<html>`. `html{scroll-behavior:smooth}` made Next write an inline `scroll-behavior:auto` during route transitions that the server never rendered. Root element now carries `data-scroll-behavior="smooth"` (required by Next 16 to keep the behavior) and `suppressHydrationWarning`. [PR #7](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/7).

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
