# Nikhil's voice

Nikhil writes like a PhD researcher who builds in the open. The voice is conversational, technically grounded, and shaped by real experiments or prior engineering experience.

This file is the long-form style contract for the `writing` skill and for any agent drafting site essays. Site marketing copy follows the shorter principles in `AGENTS.md`.

## Defining traits

- **Start from real work.** Write from an experiment, prototype, implementation decision, evaluation, debugging session, paper, or prior production experience. Do not manufacture certainty from a trend.
- **Conversational but rigorous.** Explain the idea like you are talking to another capable builder. Keep the reasoning visible.
- **Technically specific.** Name the mechanism when it matters: retrieval, reranking, context assembly, graph traversal, memory policy, inference routing, evaluation harness, sandbox boundary.
- **Evidence-backed.** Clearly distinguish a hypothesis, a setup, an observation, and a conclusion. A useful result includes what did not work.

## Voice and tense

- Default to **first person ("I")**. Use **"we"** only for co-authored research or shared lab work.
- Present indicative for things that happened. Past tense for the experiment; present tense for the lesson it supports.
- Say "PhD student" or "heading back to UNH for a PhD." Say "founded ResAlign." Do not claim titles or outcomes that are not verified.

## Punctuation and rhythm

- Em dashes are allowed when the contrast earns them — not as a default crutch.
- Open with the thesis, not throat-clearing. First paragraph should carry the claim.
- H2s stake a position ("The score is not the work"), not generic labels ("Background").
- Short paragraphs: one to three sentences.
- Close with a next step, an open question, or a link — not a summary paragraph.

## Technical writing rules

- Name the system boundary: what was in scope, what was measured, what was out of scope.
- When citing a metric, say what human task it approximates and where it lied.
- Prefer mechanism nouns over product adjectives: "eval harness", "claim extractor", "fit assessment", not "AI-powered platform".
- Code, configs, and command snippets are welcome when they clarify a decision. Do not paste large blocks without a reason.
- Link to papers, repos, and catalog entries instead of re-explaining them at length.

## Product and research framing

- ResAlign is about alignment and preparedness, not spray-and-apply automation.
- CheckThat work is about the gap between benchmark scores and claims a fact-checker can use.
- HarnessBox is about legible sandbox boundaries for coding agents.
- Agent evals score behavior against intent, not a golden trace alone.
- Inference engineering (caching, batching, disaggregated prefill/decode) is about cost and latency — not a substitute for model quality.

## Don'ts

- Do not invent numbers, customers, funding, or deployment scale.
- Do not use "AI-powered", "revolutionary", "game-changing", or empty superlatives.
- Do not use `/post` URL patterns.
- Do not turn a catalog record into a full essay — link to `/research` or `/projects` instead.
- Do not write startup pitch decks inside technical posts.
- Do not end with "In conclusion" or a paragraph that only restates the intro.

## Proof points (verified sources)

Ground claims in these when relevant:

| Work | Verified claim | Link |
|---|---|---|
| CheckThat! 2025 | Fine-tuning vs prompting for claim extraction; FLAN-T5 best on METEOR; iterative self-refinement sometimes more useful to fact-checkers | [arXiv:2509.06883](https://arxiv.org/abs/2509.06883) |
| CheckThat package | Noisy social posts → concise, checkable claims; class project → paper → pip install | [checkthat](https://github.com/Nikhil-Kadapala/checkthat) |
| ResAlign AI | Career copilot for fit, preparedness, alignment — not mass apply | [resalign.com](https://resalign.com) |
| HarnessBox | Sandbox + harness primitives for coding agents; zero dependencies | [HarnessBox](https://github.com/Nikhil-Kadapala/HarnessBox) |
| agentic-rag | Multimodal agentic RAG with a real eval harness | [agentic-rag](https://github.com/Nikhil-Kadapala/agentic-rag) |
| Rational Neural Nets | Teaching neural nets to rationalize sentiment with human annotations and LIME | [Rational-NeuralNets](https://github.com/Nikhil-Kadapala/Rational-NeuralNets) |

Current research direction: agent evals around knowledge bases, RAG, and memory at UNH. Treat as active interest, not a shipped result.

## Type overlays

All types share the base voice above. Adjust structure and emphasis by `type`.

### `case-study`

Narrative arc: problem → approach → result → what you would do differently. Standalone engineering posts use this type (no separate `blog` type).

- Name the system and the user or operator it was meant to help.
- Include at least one concrete failure mode or tradeoff you accepted.
- Link to `/projects/[slug]` for the catalog card; the essay adds the story behind the shipped work.
- Metrics must tie to usefulness, not vanity.

### `build-log`

Numbered entry in a series. Use `series` and `part` in frontmatter.

- Lead with what changed since the last entry and why now.
- Prefer dated, reversible decisions over big-bang rewrites.
- Include commands, file paths, or diffs when they teach something.
- Honest status beats polish: "works locally", "blocked on X", "reverted Y" are valid.

### `research`

Citation-heavy explainer or opinion tied to a paper — not the publication record itself.

- Link the paper DOI or arXiv in frontmatter (`paper`) and in prose.
- Separate the benchmark result from the human task it was meant to proxy.
- Name baselines and what each one optimizes for.
- Link to `/research/[slug]` for the catalog entry when one exists.

### `teaching`

Example-heavy notes for a course audience. Use `course` in frontmatter (e.g. `CS 6xx · Fall 2026`).

- Define terms before using them; assume smart readers, not prior domain exposure.
- Worked examples and counterexamples over abstract lists.
- Call out common mistakes students (or past you) made.
- Keep tone patient and direct — not performatively simplified.

## Catalog boundaries

| Surface | Role | Writing skill behavior |
|---|---|---|
| `/writing/[slug]` | Long-form essay | **Write here.** One MDX file per invocation. |
| `/research/[slug]` | Publication catalog | Link only. Do not draft catalog MDX with this skill. |
| `/projects/[slug]` | Shipped work catalog | Link only. Do not draft catalog MDX with this skill. |

A `type: research` essay explains the paper. The catalog record holds venue, year, PDF, and links. Same topic, different jobs.
