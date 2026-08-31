# Architecture

Routes, content layout, and how to add a page, post, or catalog entry.

## Settled URLs

Do not rename or restructure without explicit approval:

- `/` — home
- `/writing` — writing index
- `/writing/[slug]` — long-form essays (not `/post/[slug]`)
- `/writing/type/[type]` — type indexes (`teaching` is unlisted)
- `/research`, `/research/[slug]` — publication catalog
- `/projects`, `/projects/[slug]` — shipped-work catalog
- `/about`, `/github`

## Content layout

Long-form MDX is one pipeline under `content/writing/{case-studies,build-logs,research,teaching}/`, routed at `/writing/[slug]`, discriminated by frontmatter `type` (`case-study`, `build-log`, `research`, `teaching`). No headless CMS.

Catalogs are not essays:

- `content/research/` — publication records (year, venue, PDF, arXiv)
- `content/projects/` — shipped work cards (status, repo, links)

A writing post may link to a catalog entry. Do not duplicate a catalog record as an essay, and do not flatten papers or repos into `/writing`.

Loaders: `src/lib/writing.ts` for essays; catalog records via `src/lib/content.ts` (and related modules). Frontmatter schema: `src/lib/schemas.ts`.

Application code lives under `src/app`, `src/components`, `src/lib`. Config, `content/`, `public/`, and `docs/` stay at the repo root.

## How to add a page

1. Add `src/app/<route>/page.tsx`.
2. Export `metadata` or `generateMetadata` with at least `title` and `description`.
3. Put feature UI in the matching surface folder (`docs/authoring.md`). Do not invent a new public URL without approval.

## How to add a writing post

1. Add an MDX file under the folder that matches `type`.
2. Fill frontmatter required by `writingFrontmatterSchema`.
3. Draft with the `/writing` skill (`.agents/skills/writing/SKILL.md`). Voice is not duplicated here.
4. Open a PR. CI + Vercel preview, then merge.

## How to add a catalog entry

1. Add MDX under `content/research/` or `content/projects/` with the catalog fields that loader expects.
2. Do not also publish the same record as a `/writing` essay.
