# Sources — Fern adoption (eventual public post)

Ledger for claims that may go in the one public `case-study` after adoption finishes. If a number is not in this file, it does not go in that post.

Per-wave tracking is **internal**: [CHANGELOG.md](./CHANGELOG.md) and [notes/](./notes/). Do not put wave notes under `content/writing/`.

**Wave 1 prose scrap:** [notes/wave-1.md](./notes/wave-1.md)

## External (Fern, published)

Source: [How 2 designers and AI rebuilt Fern's marketing site](https://buildwithfern.com/post/building-fern-site) (2 June 2026). Template: [fern-marketing-site-template](https://github.com/fern-api/fern-marketing-site-template).

| Claim | Value | Use in the public post |
|---|---|---|
| Duration | 5 weeks, first commit to launch | Cited as Fern's, not ours |
| Commits | 640 to `main` (519 Kapil + Mathieu) | Cited as Fern's |
| Claude Code spend | ~$4,225 ($3,144.94 / 87 sessions; $1,080.40 / 177 sessions) | Cited as Fern's; our spend is not logged |
| Hero animation | 81 commits; rebuilt from scratch four times | Cited as Fern's |
| Hosting | Webflow $5,195.85/yr → Vercel Pro $720–960/yr | Not used yet |
| Content ported | 80+ posts, 6 case studies, 5 paid campaigns | Not used yet |
| Lines | ~72,000 TypeScript and CSS | Not used yet |

Do not copy Fern's spend, weeks, or commit totals into our running totals.

## Ours (this repo)

| Claim | Source | Status |
|---|---|---|
| Site existed 23 Aug 2026; routes `/writing`, `/research`, `/projects`, `/about`, `/github` | `/CHANGELOG.md` 2026-08-23 | verified |
| `DESIGN.md` measured from Mastra CSS; display cap 54px | `DESIGN.md` §1, §6 (`--text-headline-2xl` max 54px) | verified |
| Accent in CSS is amber `#f0a35a` | `app/globals.css` `:root --accent` | verified |
| D1–D9 locked 24–25 Aug 2026 | `plan.mdx` Settled decisions | verified (D9: internal waves, one public post) |
| Wave 0 discarded three-tree MDX WIP; restored `CodeWorkbench` / `ResearchMap` | Fern `CHANGELOG.md` D8 keep vs discard | verified |
| Wave 0 kept skills, CI, `cn()`, shadcn button + sheet, seed MDX | Fern `CHANGELOG.md` D8 keep list | verified |
| CI runs `typecheck`, `lint`, `build` | `.github/workflows/ci.yml` | verified (also on `push` to `main`) |
| Wave 0 hours ~3; wave 1 hours ~2; total ~5 | Fern `CHANGELOG.md` running totals + log entries | **estimate**, labeled as such |
| AI spend | Fern `CHANGELOG.md` | **not logged** |
| Commits since adoption start | Fern `CHANGELOG.md` running totals | 9 (`a8a53aa`..`b5fe9ef`) as of wave 2 merge |
| AGENTS.md rewrites: 2 | Fern `CHANGELOG.md` running totals | verified (count of rewrites, not git commits) |
| Zod schema versions | Fern `CHANGELOG.md` | **1** as of wave 2 (`lib/schemas.ts`) |
| Wave 0 GitHub PR number | Fern `CHANGELOG.md` | [PR #1](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/1) |
| Wave 1: authoring rules, `writing` skill, `voice-nikhil.md`; no loader | `/CHANGELOG.md` 2026-08-25 Wave 1; Fern `CHANGELOG.md` | verified; merged as [PR #3](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/3) (`416da33`) |
| Four writing types; standalone eng posts = `case-study` | `plan.mdx` D7; `.agents/skills/writing/SKILL.md` | verified |
| `next-mdx-remote` 5 → 6.0.0 for CVE-2026-0969 | `/CHANGELOG.md` 2026-08-25 Wave 1 | verified (wave 2 compiles MDX) |
| Non-goals: campaigns, SEO factory, employee profiles, `/post`, light theme, Vale, public per-wave series | `plan.mdx` Explicit non-goals + D9 | verified |
| Wave 2 MDX pipeline | `plan.mdx` Waves table; `lib/writing.ts` | verified; merged as [PR #4](https://github.com/Nikhil-Kadapala/Nikhil-Kadapala/pull/4) (`b5fe9ef`) |
| Public Fern post | — | **not yet**. Draft from `notes/` after the last wave. |

## Still empty (do not invent)

- AI tool spend (USD)
- Exact commit count and SHA range for waves 3+

Fill these in the Fern `CHANGELOG.md` required-fields block when they exist. Then update this table before writing the public `case-study`.
