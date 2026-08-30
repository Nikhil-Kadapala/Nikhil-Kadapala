# Agent notes

Personal site for Nikhil Kadapala. Next.js App Router on Vercel.

## Stack (do not drift)

- Tailwind v4. Tokens live once in `src/app/globals.css` (`@theme inline`). Colors, radii, and type sizes in UI must use those tokens. Values: `DESIGN.md`.
- shadcn primitives on Radix in `src/components/ui/`.
- Long-form MDX is one pipeline under `content/writing/{case-studies,build-logs,research,teaching}/`, routed at `/writing/[slug]`, discriminated by frontmatter `type`. No headless CMS.
- `/research` and `/projects` are catalogs (publications and shipped work), not a second essay tree.
- A new page or post is a pull request: CI + Vercel preview, then merge.

## Changelog

Repo timeline: `CHANGELOG.md`. Fern adoption metrics: `artifacts/fern-template-adoption/CHANGELOG.md`.

## Before a task

After `/context-restore`, scan `artifacts/` for files related to the work and read anything that could fill a gap. The checkpoint is the start; those files hold detail a restore can miss.

Refuse a second atomic task until the current one is implemented, reviewed, and committed. One unit of work at a time.

## Fern adoption

Tracker: `artifacts/fern-template-adoption/plan.mdx`. Changelog: `artifacts/fern-template-adoption/CHANGELOG.md`.

Waves are separate PRs: plan → review → implement → test → PR → review → merge. `/context-save` at each boundary. Next session starts with `/context-restore`.

Per-wave logs stay in `artifacts/fern-template-adoption/` (changelog + optional `notes/`). Do not publish a `/writing` series for each wave. One `case-study` after adoption is finished.

Do not import Fern’s look, `/post` URLs, campaigns, or SEO factory.

## Commands

```
bun install
bun dev
bun run typecheck
bun run lint
bun run build
```

# Authoring rules

> Project-specific rules for new code. Generic App Router, accessibility, and component best practices are assumed.

## 1. Design tokens, not raw values

Use tokens from `src/app/globals.css` (`@theme inline`) and the measured values in `DESIGN.md`. Semantic colors, type scale, radii, and layout widths belong in the theme — not as one-off hex, rem, or arbitrary Tailwind values in components.

If a new value is genuinely needed, add it to `src/app/globals.css` once and reference the token everywhere else. No escape hatches sprinkled across files.

## 2. Use `cn()` for conditional classes

`cn()` from `src/lib/utils.ts` is the only way to build conditional classNames. No template-string class assembly.

```tsx
// Good
<div className={cn("p-4", active && "bg-muted", className)}>

// Bad
<div className={`p-4 ${active ? "bg-muted" : ""} ${className}`}>
```

## 3. Every page exports metadata; URL structure is sacred

Every `page.tsx` exports `metadata` (or `generateMetadata` for dynamic routes) with at minimum `title` and `description`.

These URLs are settled and indexed. Do not rename or restructure without explicit approval:

- `/writing/[slug]` — long-form essays (not `/post/[slug]`)
- `/research/[slug]` — publication catalog records
- `/projects/[slug]` — shipped-work catalog records
- `/about`, `/github`

## 4. Don't add a dependency without asking

bun + Next 15 + Tailwind v4 + shadcn/Radix + gray-matter already cover the current stack. New deps need explicit approval: what they do that the existing stack does not, and why a small in-repo solution would not work.

## 5. One writing pipeline; catalogs stay separate

Long-form MDX lives under `content/writing/` with a `type` field (`case-study`, `build-log`, `research`, `teaching`). Each type maps to its own subfolder.

Catalogs are not essays:

- `content/research/` — publication records (year, venue, PDF, arXiv)
- `content/projects/` — shipped work cards (status, repo, links)

A writing post may link to a catalog entry. Do not duplicate a catalog record as an essay, and do not flatten papers or repos into `/writing`.

# Writing style

> Voice for site copy and long-form MDX on this site. Full contract: `.agents/skills/writing/voice-nikhil.md`. Use the `/writing` skill to draft posts.

## Principles

1. **First-person thesis voice.** Default to "I". Use "we" only for shared research or co-authored work. Lead with the claim, not the setup.
2. **Claims before setup.** State what you believe or observed before walking through how you got there.
3. **Concrete evidence over hype.** Name mechanisms, setups, and outcomes. A proof point beats an adjective.
4. **Metrics tied to human usefulness.** A high automatic score is not the same as a system someone can use. Say what the number missed.

## Punctuation and rhythm

- Em dashes are fine when the contrast earns them. Do not ban them by reflex.
- Short paragraphs. H2s should stake a claim, not label a section ("Background", "Introduction").
- Present indicative. Drop hedge words ("can", "may", "is designed to") when you mean something happened.

## Proof points (verified only)

Use these when relevant. Do not invent numbers, customers, or outcomes.

| Source | What to cite |
|---|---|
| CheckThat! (CLEF 2025) | Claim extraction paper; FLAN-T5 won METEOR; iterative self-refinement sometimes produced more usable claims. [arXiv:2509.06883](https://arxiv.org/abs/2509.06883) |
| ResAlign AI | Career copilot for fit and preparedness, not mass-apply. [resalign.com](https://resalign.com) |
| HarnessBox | Sandbox + harness primitives for coding agents; zero dependencies by design. [GitHub](https://github.com/Nikhil-Kadapala/HarnessBox) |
| agentic-rag | Multimodal agentic RAG with an eval harness. [GitHub](https://github.com/Nikhil-Kadapala/agentic-rag) |
| Rational Neural Nets | Sentiment rationalization with human annotations and LIME. [GitHub](https://github.com/Nikhil-Kadapala/Rational-NeuralNets) |
| UNH PhD | Agent evals around knowledge bases, RAG, and memory — scoring behavior against intent |

## Anti-patterns

- Invented metrics, customers, or "10x" claims without a source
- Generic "AI-powered" copy instead of naming the mechanism
- `/post` URLs, campaigns, or SEO-factory copy
- Duplicating catalog content inside `/writing`
- Author registry or employee-profile patterns from the Fern template
- Future hedging where the work already happened
- Closing with a recap instead of a next step or honest open question

## Skills

- **`writing`** — draft one MDX essay under `content/writing/`. Not for product planning.
- **`blog-to-build`** — working-backwards product brief before coding. Not for site essays.
