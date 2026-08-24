# Contributing

This site is a Next.js app. **A new page or post is a pull request** — reviewed, preview-deployed on Vercel, and merged like any other code change. There is no CMS.

Fern template adoption is in progress. Follow `artifacts/fern-template-adoption/plan.mdx`. Do not mix two waves in one PR.

## Content

Until wave 2 lands, writing/research/projects on the live site still read `lib/content.ts`. Seed MDX under `content/` is inventory for that wave.

**Target shape (wave 2):**

| Kind | Where | URL |
|---|---|---|
| Writing (all long-form) | `content/writing/{case-studies,build-logs,research,teaching}/*.mdx` | `/writing/<slug>` |
| Publications catalog | data + optional MDX record | `/research`, `/research/<slug>` |
| Projects catalog | data + optional MDX record | `/projects`, `/projects/<slug>` |

Writing frontmatter must include `type`: `case-study` | `build-log` | `research` | `teaching`. Zod will fail the build on a bad field.

1. Branch from `main`.
2. Add or edit the file for that wave only.
3. Open a PR. CI runs typecheck, lint, and build. Vercel posts a preview URL.
4. Review the preview. Merge when it looks right.
5. `/context-save`, then start the next wave in a new session with `/context-restore`.

## Design tokens

Every color, radius, and type size must resolve to a token in `app/globals.css` (`@theme inline`). Do not add raw hex, `px` font sizes, or one-off radii in components. Token *values* come from `DESIGN.md`.

UI primitives live in `components/ui/` (shadcn on Radix). Reuse them before inventing a new control.
