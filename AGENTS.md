# Agent notes

Personal site for Nikhil Kadapala. Next.js App Router on Vercel.

## Stack (do not drift)

- Tailwind v4. Tokens live once in `app/globals.css` (`@theme inline`). Colors, radii, and type sizes in UI must use those tokens. Values: `DESIGN.md`.
- shadcn primitives on Radix in `components/ui/`.
- Long-form MDX is one pipeline under `content/writing/{case-studies,build-logs,research,teaching}/`, routed at `/writing/[slug]`, discriminated by frontmatter `type`. No headless CMS.
- `/research` and `/projects` are catalogs (publications and shipped work), not a second essay tree.
- A new page or post is a pull request: CI + Vercel preview, then merge.

## Changelog

Repo timeline: `CHANGELOG.md`. Fern adoption metrics: `artifacts/fern-template-adoption/CHANGELOG.md`.

## Fern adoption

Tracker: `artifacts/fern-template-adoption/plan.mdx`. Changelog: `artifacts/fern-template-adoption/CHANGELOG.md`.

Waves are separate PRs: plan → review → implement → test → PR → review → merge. `/context-save` at each boundary. Next session starts with `/context-restore`.

Do not import Fern’s look, `/post` URLs, campaigns, or SEO factory.

## Commands

```
bun install
bun dev
bun run typecheck
bun run lint
bun run build
```
