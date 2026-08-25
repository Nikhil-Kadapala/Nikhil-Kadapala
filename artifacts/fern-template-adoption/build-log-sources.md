# Build-log sources — Fern adoption series

Ledger for claims in `content/writing/build-logs/`. If a number is not in this file, it does not go in the post.

**Series:** Fern adoption  
**Part 1 draft:** `content/writing/build-logs/borrow-the-os-not-the-look.mdx` (`draft: true`, inventory until wave 2)

## External (Fern, published)

Source: [How 2 designers and AI rebuilt Fern's marketing site](https://buildwithfern.com/post/building-fern-site) (2 June 2026). Template: [fern-marketing-site-template](https://github.com/fern-api/fern-marketing-site-template).

| Claim | Value | Use in part 1 |
|---|---|---|
| Duration | 5 weeks, first commit to launch | Cited as Fern's, not ours |
| Commits | 640 to `main` (519 Kapil + Mathieu) | Cited as Fern's |
| Claude Code spend | ~$4,225 ($3,144.94 / 87 sessions; $1,080.40 / 177 sessions) | Cited as Fern's; our spend is not logged |
| Hero animation | 81 commits; rebuilt from scratch four times | Cited as Fern's |
| Hosting | Webflow $5,195.85/yr → Vercel Pro $720–960/yr | Not used in part 1 |
| Content ported | 80+ posts, 6 case studies, 5 paid campaigns | Not used in part 1 |
| Lines | ~72,000 TypeScript and CSS | Not used in part 1 |

Do not copy Fern's spend, weeks, or commit totals into our running totals.

## Ours (this repo)

| Claim in part 1 | Source | Status |
|---|---|---|
| Site existed 23 Aug 2026; routes `/writing`, `/research`, `/projects`, `/about`, `/github` | `/CHANGELOG.md` 2026-08-23 | verified |
| `DESIGN.md` measured from Mastra CSS; display cap 54px | `DESIGN.md` §1, §6 (`--text-headline-2xl` max 54px) | verified |
| Accent in CSS is amber `#f0a35a` | `app/globals.css` `:root --accent` | verified |
| D1–D8 locked 24 Aug 2026 | `artifacts/fern-template-adoption/plan.mdx` Settled decisions | verified |
| Wave 0 discarded three-tree MDX WIP; restored `CodeWorkbench` / `ResearchMap` | Fern `CHANGELOG.md` D8 keep vs discard | verified |
| Wave 0 kept skills, CI, `cn()`, shadcn button + sheet, seed MDX | Fern `CHANGELOG.md` D8 keep list | verified |
| CI runs `typecheck`, `lint`, `build` | `.github/workflows/ci.yml` | verified (also on `push` to `main`) |
| Wave 0 hours ~3; wave 1 hours ~2; total ~5 | Fern `CHANGELOG.md` running totals + log entries | **estimate**, labeled as such |
| AI spend | Fern `CHANGELOG.md` | **not logged** |
| Commits since adoption start | Fern `CHANGELOG.md` running totals | **pending** |
| AGENTS.md rewrites: 2 | Fern `CHANGELOG.md` running totals | verified (count of rewrites, not git commits) |
| Zod schema versions: 0 | Fern `CHANGELOG.md` | verified |
| Wave 0 GitHub PR number | Fern `CHANGELOG.md` | **not recorded** (log previously said “not yet a PR”; repaired to “on `main`, PR number not recorded”) |
| Wave 1: authoring rules, `writing` skill, `voice-nikhil.md`; no loader | `/CHANGELOG.md` Unreleased; Fern `CHANGELOG.md` 2026-08-24 Wave 1 | verified (uncommitted on `chore/fern-adoption-wave-1` at draft time) |
| Four writing types; standalone eng posts = `case-study` | `plan.mdx` D7; `.agents/skills/writing/SKILL.md` | verified |
| `next-mdx-remote` 5 → 6.0.0 for CVE-2026-0969; unused until wave 2 | `/CHANGELOG.md` Unreleased | verified |
| Non-goals: campaigns, SEO factory, employee profiles, `/post`, light theme, Vale | `plan.mdx` Explicit non-goals | verified |
| Wave 2 still not started (Zod, loader, `generateMetadata`, recategorize seed) | `plan.mdx` Waves table | verified |

## Still empty (do not invent)

- AI tool spend (USD)
- Exact commit count and SHA range for wave 0 and wave 1
- Wave 0 GitHub PR number
- Preview URL reviewed for wave 1

Fill these in the Fern `CHANGELOG.md` required-fields block when they exist. Then update this table and the next `build-log` part.
