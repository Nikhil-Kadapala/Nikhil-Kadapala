---
name: writing
version: 0.2.0
description: Draft a new long-form MDX essay for nikhill.me. Use when asked to write a post, draft an essay, write a build log, explain a paper, or create teaching notes for the writing pipeline. Produces one MDX file under content/writing/ with valid frontmatter, applies Nikhil's voice from voice-nikhil.md, and stops short of committing. Not for product planning — use blog-to-build for that.
---

# Writing

Draft one long-form MDX essay for [nikhill.me](https://nikhill.me). Output: a single file at `content/writing/<type-folder>/<slug>.mdx` with valid frontmatter and clean prose.

This skill writes site essays. It does **not** plan product features, draft catalog records, or edit app routes. For working-backwards product briefs, use `blog-to-build`.

The live pipeline is Zod + one loader. Schema: [`lib/schemas.ts`](../../../lib/schemas.ts) (`writingFrontmatterSchema`). Loader: [`lib/writing.ts`](../../../lib/writing.ts). Routes: `/writing` and `/writing/[slug]`.

## Step 0 — Read the voice contract

Before drafting, read [voice-nikhil.md](./voice-nikhil.md) and the Writing style section of [AGENTS.md](../../../AGENTS.md).

Default voice: first-person, technically grounded, evidence-backed.

## Step 1 — Gather the brief in one message

If the user has not already provided what's below, ask in **one** short message:

1. **Topic / angle** — what is the post about and what is the takeaway?
2. **Audience** — another builder? evals researcher? course students? (defaults to capable builder)
3. **Anchor points** — papers, repos, metrics, links, or prior art to weave in
4. **Type** — one of `case-study`, `build-log`, `research`, `teaching`
5. **Length** — short (300–500 words) / medium (600–900) / long (1000+). Default medium.

If they are vague but have a clear topic ("write about the CheckThat metric gap"), pick `research`, medium length, and let them redirect.

## Step 2 — Pick the type and folder

| `type` | Folder | When to use |
|---|---|---|
| `case-study` | `content/writing/case-studies/` | Finished project or system: problem → approach → result. **Standalone engineering posts land here** — there is no separate `blog` / `eng-blog` type. |
| `build-log` | `content/writing/build-logs/` | Numbered series entry; set `series` and `part` |
| `research` | `content/writing/research/` | Paper explainer or opinion; link catalog via `paper` |
| `teaching` | `content/writing/teaching/` | Course notes; set `course` |

A one-off eng post ("how I built X", "this caching gotcha") is `case-study`. A numbered public series (a multi-part rewrite, a course sequence) is `build-log`. Fern adoption waves are **not** a public series: they stay in `artifacts/fern-template-adoption/` until the work is done, then one `case-study`. Do not invent a fifth type.

Apply the matching type overlay from [voice-nikhil.md](./voice-nikhil.md).

Do not draft into `content/research/` or `content/projects/`. Those are catalogs. Link to them from the essay when relevant.

## Step 3 — Pick frontmatter

Schema: `writingFrontmatterSchema` in `lib/schemas.ts`. The loader will fail the build on invalid files. Use this shape:

```yaml
---
title: "Short declarative headline"
date: "YYYY-MM-DD"
description: "One sentence, 15–30 words. Shows up in the index and in page metadata."
type: research  # case-study | build-log | research | teaching
tags:
  - Evals
  - Research
draft: true
# Optional by type:
# series: "Fern adoption"
# part: 1
# paper: "https://arxiv.org/abs/2509.06883"
# course: "CS 6xx · Fall 2026"
---
```

| Field | How to fill |
|---|---|
| `title` | Short, declarative. No subtitle colons unless the subtitle earns it. |
| `date` | Publication day as `YYYY-MM-DD`, quoted. The writing index sorts on this calendar date. Git history is created/updated. Do not add `timestamp`, `created_at`, `updated`, or `updated_at`. |
| `description` | TL;DR for the writing index and `generateMetadata`. Not a repeat of the title. Not `excerpt`. |
| `type` | One of the four enum values. Must match the folder. |
| `tags` | Reuse existing tags where possible. Title case is fine (`Evals`, `Research`). |
| `draft` | `true` while iterating. `false` only when the user wants it on production. Drafts render on local/preview; production index, RSS, and sitemap omit them. |
| `series` / `part` | Required for `build-log`. |
| `paper` | DOI or URL for `research` posts tied to a publication. |
| `course` | Required for `teaching` posts. Format example: `CS 6xx · Fall 2026`. |

Unknown keys (including `excerpt`) fail Zod `.strictObject`.

## Step 4 — Pick a slug

Kebab-case. Descriptive and evergreen. Drop dates and version numbers unless they are the point.

Examples:

- "The score is not the work" → `the-score-is-not-the-work`
- "Eval harness, part 2" → `eval-harness-part-2`

Check **all four** writing subfolders for collisions before writing:

```text
content/writing/case-studies/
content/writing/build-logs/
content/writing/research/
content/writing/teaching/
```

Slugs must be unique across types. If the slug exists, ask before overwriting.

## Step 5 — Write the post

Apply [voice-nikhil.md](./voice-nikhil.md) and the type overlay.

Universal rules:

- **Open with the thesis.** First paragraph states the claim or observation.
- **H2s do work.** Each one stakes a position, not a generic label.
- **Short paragraphs.** One to three sentences.
- **Concrete proof points only.** Use the verified list in voice-nikhil.md and AGENTS.md. Omit if you do not have a source.
- **Link catalogs, do not duplicate them.** Point to `/research/[slug]` or `/projects/[slug]` for records; explain in the essay.
- **Close with action or an open question.** No recap paragraph.

Write standard Markdown plus GitHub-Flavored Markdown (tables, strikethrough, autolinks via `remark-gfm`). The MDX registry in `components/mdx-components.tsx` maps `a` only: internal `/` paths use Next.js `Link`; `http(s)` links open in a new tab. Do not invent custom tags (`<Callout>`, `<Tweet>`, and so on).

### Internal link targets

- `/writing` — writing index
- `/writing/<slug>` — another essay
- `/research/<slug>` — publication catalog
- `/projects/<slug>` — project catalog
- `/about` — about page

Never link to `/post/<slug>`.

## Step 6 — Write the file

Write to `content/writing/<type-folder>/<slug>.mdx`. One file, one source of truth.

Do not also write a draft to `.context/` or elsewhere. Do not touch catalog files, app routes, or `lib/content.ts`.

## Step 7 — Publishing

- `draft: true` (default while iterating): file is on the route at `/writing/<slug>` in `bun dev` and Vercel preview. Production omits it from the index, RSS, sitemap, and `generateStaticParams`.
- `draft: false`: it is a live page after the next production deploy. Hand back that URL.

If the user asks to publish, set `draft: false` only when they say so. Do not flip it on your own.

## Step 8 — Hand back

Reply with:

- The file path written
- The slug and URL (`/writing/<slug>`)
- The `type` and word count
- One sentence on the angle taken
- Draft vs live: `draft: true` → preview/dev only; `draft: false` → production after deploy

Keep it terse. The user wants to read the post, not a summary of it.

## Hard rules

- **Read voice-nikhil.md before drafting.** Do not default to generic AI-blog voice.
- **Never invent numbers, customers, or outcomes.** Omit unverified proof points.
- **Never write a recap or "in conclusion" paragraph.**
- **Don't commit.** Write the file. Stop. The user reviews and commits when ready.
- **Don't touch other pages.** This skill writes one MDX file. Site or catalog changes are separate tasks.
- **Don't confuse with blog-to-build.** Product briefs and launch posts for features are not site essays.

## Review checklist

Before handing back, verify:

- [ ] `type` matches folder
- [ ] Frontmatter matches `lib/schemas.ts` (`description`, not `excerpt`; no `updated`)
- [ ] Slug does not collide with an existing file
- [ ] Voice is first-person and evidence-backed
- [ ] No `/post` links or invented metrics
- [ ] Catalog content is linked, not duplicated
- [ ] Handback states draft vs live URL
