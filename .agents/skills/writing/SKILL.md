---
name: writing
version: 0.1.0
description: Draft a new long-form MDX essay for nikhill.me. Use when asked to write a post, draft an essay, write a build log, explain a paper, or create teaching notes for the writing pipeline. Produces one MDX file under content/writing/ with valid frontmatter, applies Nikhil's voice from voice-nikhil.md, and stops short of committing. Not for product planning — use blog-to-build for that.
---

# Writing

Draft one long-form MDX essay for [nikhill.me](https://nikhill.me). Output: a single file at `content/writing/<type-folder>/<slug>.mdx` with valid frontmatter and clean prose.

This skill writes site essays. It does **not** plan product features, draft catalog records, or edit app routes. For working-backwards product briefs, use `blog-to-build`.

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

A one-off eng post ("how I built X", "this caching gotcha") is `case-study`. A numbered series (Fern adoption waves, a multi-part rewrite) is `build-log`. Do not invent a fifth type.

Apply the matching type overlay from [voice-nikhil.md](./voice-nikhil.md).

Do not draft into `content/research/` or `content/projects/`. Those are catalogs. Link to them from the essay when relevant.

## Step 3 — Pick frontmatter

Target schema (D7 — enforced by Zod in wave 2). Use this shape now:

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
| `date` | Publication day as `YYYY-MM-DD`, quoted. The writing index sorts on this calendar date. Git history is created/updated; do not add `timestamp`, `created_at`, or `updated_at`. Optional `updated` is a wave-2 question if a post is materially revised. |
| `description` | TL;DR for the writing index and page metadata. Not a repeat of the title. |
| `type` | One of the four enum values. Must match the folder. |
| `tags` | Reuse existing tags where possible. Title case is fine (`Evals`, `Research`). |
| `draft` | `true` while iterating. `false` only when the user wants it review-ready. |
| `series` / `part` | Required for `build-log` entries in a series. |
| `paper` | DOI or URL for `research` posts tied to a publication. |
| `course` | Course label for `teaching` posts. |

Note: seed inventory may still use `excerpt`. New drafts use `description` per D7.

## Step 4 — Pick a slug

Kebab-case. Descriptive and evergreen. Drop dates and version numbers unless they are the point.

Examples:

- "The score is not the work" → `the-score-is-not-the-work`
- "Wave 1 agent OS" → `fern-adoption-wave-1-agent-os`

Check **all four** writing subfolders for collisions before writing:

```text
content/writing/case-studies/
content/writing/build-logs/
content/writing/research/
content/writing/teaching/
content/writing/          # legacy seed files at root
```

If the slug exists, ask before overwriting.

## Step 5 — Write the post

Apply [voice-nikhil.md](./voice-nikhil.md) and the type overlay.

Universal rules:

- **Open with the thesis.** First paragraph states the claim or observation.
- **H2s do work.** Each one stakes a position, not a generic label.
- **Short paragraphs.** One to three sentences.
- **Concrete proof points only.** Use the verified list in voice-nikhil.md and AGENTS.md. Omit if you do not have a source.
- **Link catalogs, do not duplicate them.** Point to `/research/[slug]` or `/projects/[slug]` for records; explain in the essay.
- **Close with action or an open question.** No recap paragraph.

MDX components and a full registry arrive in wave 2. For now, write standard Markdown. No invented custom tags.

### Internal link targets

- `/writing` — writing index
- `/writing/<slug>` — another essay (once wave 2 wires routes)
- `/research/<slug>` — publication catalog
- `/projects/<slug>` — project catalog
- `/about` — about page

Never link to `/post/<slug>`.

## Step 6 — Write the file

Write to `content/writing/<type-folder>/<slug>.mdx`. One file, one source of truth.

Do not also write a draft to `.context/` or elsewhere. Do not touch catalog files, app routes, or `lib/content.ts`.

## Step 7 — Pre-Wave-2 readiness guard

The MDX loader, Zod schema, and dynamic `/writing/[slug]` routes land in **wave 2**. Until then:

- The file is **inventory only**. It will not appear on the live site automatically.
- Say so explicitly in the handback. Do not promise a live preview at `/writing/<slug>` unless wave 2 is merged.
- If the user asks to publish now, stop and explain that routing requires wave 2, or ask whether inventory-only is acceptable.

## Step 8 — Hand back

Reply with:

- The file path written
- The slug and intended URL (`/writing/<slug>`)
- The `type` and word count
- One sentence on the angle taken
- **Readiness note:** inventory-only until wave 2, unless told otherwise

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
- [ ] Frontmatter uses `description`, not `excerpt`
- [ ] Slug does not collide with an existing file
- [ ] Voice is first-person and evidence-backed
- [ ] No `/post` links or invented metrics
- [ ] Catalog content is linked, not duplicated
- [ ] Readiness guard stated if wave 2 is not live
