---
title: Wave 1 — borrow the OS, not the look
wave: 1
date: 2026-08-24
status: internal
---

# Wave 1 notes (internal)

Not a site page. Prose scrap for the one public post that ships after Fern adoption is finished. Metrics live in [CHANGELOG.md](../CHANGELOG.md). Claims that need a source go in [build-log-sources.md](../build-log-sources.md).

I am stealing Fern's agent operating system and refusing their site.

Fern published [how two designers rebuilt buildwithfern.com](https://buildwithfern.com/post/building-fern-site) in five weeks, with spend, commit counts, and 81 commits on the hero animation alone. The post is useful because the numbers are in it. The [template they extracted](https://github.com/fern-api/fern-marketing-site-template) is useful for a different reason: `AGENTS.md`, skills, token discipline, Zod-validated MDX, and a pull request as the unit of a page.

That second list transfers to a one-person research site. The first list does not. I am not rebuilding a marketing engine. I already had a dark homepage, measured type, and URLs I intend to keep.

## Fern's score is not the work

Their published totals: five weeks, 640 commits to `main`, about $4,225 of Claude Code spend, 81 commits touching the hero. Those figures describe a two-designer marketing rebuild with campaigns and a visual identity. They are not a benchmark for this repo.

The public post will cite `artifacts/fern-template-adoption/CHANGELOG.md` or say the field is empty. Hours so far are estimates logged there: about three for wave 0 (briefing, D1–D8, the baseline merge) and about two for wave 1 (authoring rules and the writing skill). Spend is not logged. Commit counts for this slice were still marked pending when this note was written. If the finished post sounds like Fern's, it should be because I started counting, not because I borrowed their arithmetic.

What I did take from them is the shape of `AGENTS.md`: tokens live once, URLs are sacred, every page exports metadata, do not add a dependency without asking. I rewrote every sentence. Their second-person marketing voice, Vale prose lint, and `/post/[slug]` routes stay in their repo.

## The first useful merge was a deletion

The site existed on 23 August 2026: Next.js App Router on Vercel, bun, Tailwind v4, a `DESIGN.md` measured from Mastra's shipped CSS, routes at `/writing`, `/research`, `/projects`, `/about`, and `/github`. Accent in `app/globals.css` is amber `#f0a35a`. Display type caps at 54px. Dark is the canvas, not a theme toggle.

Fern's seed is light-first, green, 64px display, `next-themes`, and `/post`. Pasting that on top of this homepage would have been a restyle dressed up as adoption.

Eight calls landed on 24 August (D1–D8 in `artifacts/fern-template-adoption/plan.mdx`):

- Steal the workflow and the "tokens live once" rule. Keep this site's values.
- Keep these URLs. Never import `/post`.
- Dark only. No `next-themes`.
- `DESIGN.md` wins values; Fern wins the no-escape-hatch rule. CSS reconcile is wave 3.
- First-person research voice. Em dashes stay if they earn their place. No Vale.
- bun, oxlint, Next 15. No `src/` move. No Next 16 as a template side effect. Zod in wave 2.
- One writing pipeline under `/writing/[slug]`, discriminated by frontmatter `type`. Projects and publications stay catalogs.
- Discard the three-tree MDX WIP that would have been deleted under that taxonomy.

D8 is the part I would repeat. A typed loader split across writing, research, and projects as three equal trees contradicted D7. App pages already consumed it. I restored the home artifacts (`CodeWorkbench`, `ResearchMap`) from `main` and kept the infrastructure that later waves actually use: `.agents/skills/`, CI (`typecheck`, `lint`, `build`), `cn()` in `lib/utils.ts`, shadcn `button` and `sheet`, seed MDX as inventory.

What I skipped on purpose is also the point: campaigns, SEO factory, employee profiles, Fern tokens, light theme.

## Authoring rules shipped. The loader did not.

Wave 1 is the agent OS, not a visual change. `AGENTS.md` now has authoring rules and four voice principles. The long contract lives in `.agents/skills/writing/voice-nikhil.md`. The `writing` skill drafts one MDX file under `content/writing/<type-folder>/` and stops. It does not invent metrics.

Four types on the public site: a one-off engineering post is `case-study`. A paper explainer is `research` and links the catalog. Teaching notes are `teaching`. Numbered public series are `build-log`. Fern adoption waves are none of those. They stay in this artifacts folder until the work is done, then one `case-study`.

`date` in public frontmatter is the publication day. Git is created and updated. The writing index and page metadata read `description`, not a CMS timestamp.

A side fix landed while the pipeline was still empty: Vercel refused production builds on CVE-2026-0969 in `next-mdx-remote` 5, so the package is at 6.0.0 before anything compiles MDX. That is not wave 1. It is the cost of a dependency sitting unused.

The open question at the time: whether I would actually log spend and commit counts before later waves, or keep publishing estimates and "not logged" while telling myself the changelog is honest enough.

## Later correction (2026-08-29)

This note is the 24 August Wave 1 scrap. Do not rewrite the calls as they stood that day.

Waves 0–4 later merged. `src/` shipped in `89479f4` as foundation work, not a Fern wave. Live tokens are `src/app/globals.css`. D6's "no `src/` move" was a Fern-adoption non-goal and was reversed. The public post should say that, not pretend D6 still forbids `src/`.
