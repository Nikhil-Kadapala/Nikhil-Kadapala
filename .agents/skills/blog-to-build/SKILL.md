---
name: blog-to-build
version: 0.0.1
description: Turns a proposed feature into an Amazon-style working-backwards feature brief, validation plan, and implementation-ready vertical-slice plan. Use when asked to plan a feature, write a launch post or PR/FAQ before coding, clarify user value, define measurable success, create product mockups, or prepare an AI agent to implement a feature safely.
---

# Blog to Build

Use this skill to decide **what should be built and why** before deciding
**how to build it**.

Treat the launch post as a forcing function: if the feature cannot be explained
clearly to a target user, its value and scope are not ready for implementation.

This is inspired by Amazon's working-backwards practice, but it is not a request
to publish marketing copy. The initial post is an internal product artifact and
becomes the source of truth for later design and delivery.

## Core Principles

- Start from a specific user problem and observable outcome, not a technology,
  architecture, or implementation task.
- Write the customer-facing explanation before discussing databases, APIs, model
  providers, schemas, or code structure.
- Define success with a measurable leading or business metric whenever possible;
  do not substitute vague quality claims for a metric.
- Keep the product brief separate from the technical design. Product clarifies
  value; architecture chooses constraints and tradeoffs; program design specifies
  code-level decisions.
- Prefer a thin end-to-end vertical slice over a horizontal build of every layer.
  Make one user path work, test it, then add rules, edge cases, and scale.
- Keep the human accountable for product intent, irreversible choices, security
  boundaries, and acceptance. Let agents investigate, draft, implement, test,
  and report evidence.
- Avoid premature process. For an early pre-PMF experiment, timebox this
  artifact aggressively; for a paid, regulated, or shared product, make it more
  rigorous.

## When Invoked

1. Identify the feature or decision to make. Read existing product docs, issue
   context, analytics, user feedback, and relevant code only as needed.
2. If the target user, painful moment, or desired behavior is unknown, ask one
   focused clarification question before creating implementation work.
3. Produce the product brief first. Do not write production code, migrations,
   API contracts, or detailed architecture until the user approves or explicitly
   asks to proceed with stated assumptions.
4. State assumptions visibly. Distinguish known facts, hypotheses, and open
   questions.
5. When validation evidence is unavailable, design the smallest experiment that
   can produce it rather than fabricating certainty.

## Workflow

### 1. Frame the Decision

Create a compact feature frame:

```md
Feature:
Target user / segment:
Painful moment:
Current workaround:
Desired user behavior:
Why now:
Non-goals:
Known constraints:
Assumptions to validate:
```

A valid problem statement names a user, a context, an existing cost or failure,
and a behavior that will change.

Reject solution-first statements such as “add an agent router” until they are
connected to a user-facing outcome.

### 2. Write the Internal Launch Post

Write in present tense as if the feature has shipped. Use plain language that a
prospective user can understand without product or engineering context.

```md
# [Feature name]: [primary user outcome]

## Headline
One outcome-focused sentence.

## For [target user]
Describe who it is for and the moment they need help.

## The problem
Describe the old workflow and its concrete cost, risk, delay, or frustration.

## What changes
Explain the new capability in terms of user actions and visible results.

## Example
Show a short before/after scenario with realistic inputs and output.

## Why it matters
State the durable value: time saved, errors avoided, revenue enabled,
confidence increased, or capability unlocked.

## What it does not do
Name important boundaries so users and builders do not infer unsupported
promises.

## Availability and trust
State rollout, pricing or plan implications, permissions, data handling, and
reliability expectations if relevant.

## Call to action
State the one next action the user should take.
```

Quality gate: a reader should be able to answer all of these without reading
technical material:

- Who is this for?
- What painful job does it solve?
- What can they now do that they could not reliably do before?
- Why is that outcome worth changing behavior or paying for?
- What is intentionally out of scope?

Revise until the explanation is specific, credible, and outcome-led. Do not use
feature names, model names, or internal mechanisms as a substitute for value.

### 3. Define Success and Guardrails

Create a measurement contract before build work. Select one primary success
metric tied closely to the intended user behavior; add supporting metrics and
harm guardrails.

```md
Primary outcome metric:
Baseline and measurement window:
Target / decision threshold:
Supporting metrics:
Guardrails (must not worsen):
Instrumentation required:
Experiment or rollout design:
Review cadence and decision owner:
```

Examples:

- Primary: activation rate for users who complete the workflow within 24 hours
- Supporting: median time to first successful result, repeat use after seven days
- Guardrails: error rate, task abandonment, inference cost per successful task,
  support tickets, latency, unsafe output rate

Use a threshold that implies an action: ship wider, iterate, pause, or remove.

If a direct business metric is delayed or noisy, choose a measurable leading
indicator and name the limitation.

### 4. Create UX Evidence

Create plain HTML mockups, wireframes, prototypes, or annotated flow diagrams
for the critical user journey. Optimize for validating comprehension and
interaction, not visual polish.

For each key state, specify:

```md
Entry point:
User intent:
Screen / state:
Primary action:
System response:
Empty, loading, error, and permission states:
Success state:
Analytics event(s):
```

Review the flow against the launch post:

- Every promised outcome needs a visible path.
- Every visible control needs a user reason.
- Update the post when the mockup exposes a confusing promise or missing
  decision.

### 5. Convert to a Build Contract

Only after the product artifact is coherent, derive an
implementation-ready contract. Keep decisions at the highest useful level
first.

```md
## Acceptance criteria
- Given [context], when [action], then [observable result].

## Constraints and invariants
- Security, privacy, compatibility, latency, cost, accessibility, and
  operational requirements.

## Technical decisions requiring approval
- Decision, options considered, chosen option, rationale, reversibility.

## Unknowns / spikes
- Question, quickest evidence-producing test, owner, timebox.

## Rollout and rollback
- Feature flag, cohort, monitoring, fallback behavior, rollback trigger.
```

Do not let an agent silently choose an irreversible product or architecture
decision.

Escalate choices involving:

- Data retention
- Authentication or authorization
- External contracts and API compatibility
- Payments
- Migrations
- Compliance
- Destructive behavior
- Substantial vendor lock-in

### 6. Plan a Vertical Slice

Define the smallest real path from user input to user-visible value. It may use
temporary internals, but it must exercise the actual boundaries that matter.

```md
Vertical slice:
1. Entry/UI or client request
2. Contract and authorization
3. Minimal domain behavior
4. Persistence or integration boundary
5. User-visible response
6. Telemetry and acceptance test

Deferred after slice:
- Edge cases
- Bulk workflows
- Optimization
- Advanced configuration
- Broad refactors
```

Ask the agent to implement and verify this slice before expanding horizontally.

Require an evidence bundle:

- Tests run
- UI or API proof
- Changed files
- Metrics emitted
- Known limitations
- Decisions made

### 7. Implement in Controlled Loops

For each slice, use this agent loop:

1. Restate the approved outcome, acceptance criteria, constraints, and non-goals.
2. Inspect relevant repository context and identify uncertain decisions before editing.
3. Propose a short plan and file-level change list; obtain approval when a
   listed decision is material or irreversible.
4. Implement the smallest end-to-end change.
5. Run targeted tests plus relevant lint, type, and build checks; exercise the
   user journey where feasible.
6. Compare results against acceptance criteria and measurement requirements.
7. Report evidence, deviations, risks, and the next smallest slice. Update the
   brief if learning changes the product claim.

Never claim success merely because code compiles or existing tests pass.

Success means the observable user outcome and guardrails have evidence.

## Required Deliverable

Unless the user asks for a narrower artifact, return one concise document in
this order:

1. Feature frame
2. Internal launch post
3. Success and guardrail metrics
4. UX flow or mockup plan
5. Open questions and assumptions
6. Acceptance criteria and constraints
7. Vertical-slice implementation plan
8. Rollout, monitoring, and rollback plan
9. Explicit approval checkpoint before coding

## Agent Prompt Template

Use this as the handoff prompt after the product brief is approved:

```md
You are implementing an approved product slice.

## Outcome
[Paste one-sentence user outcome]

## User and problem
[Paste target user and painful moment]

## Acceptance criteria
[Paste Given/When/Then criteria]

## Constraints and non-goals
[Paste constraints, guardrails, and exclusions]

## Slice boundary
[Paste the smallest end-to-end path]

## Required behavior

1. Inspect the repository and relevant docs before editing.
2. Identify ambiguous or irreversible choices; stop for approval instead of
   guessing.
3. Propose a concise plan and affected files.
4. Implement only this vertical slice.
5. Add or update focused tests and instrumentation.
6. Run relevant checks and exercise the end-to-end path.
7. Return an evidence report: changes, tests, results, metrics, limitations,
   and next slice.

Do not expand scope, redesign unrelated systems, or replace explicit product
decisions with generic best practices.
```

## Review Checklist

Before authorizing implementation, verify:

- The launch post makes a falsifiable promise to an identifiable user.
- The feature solves a real behavior or pain, not an internal technology
  preference.
- One success metric has a baseline, target, window, and owner.
- Guardrails capture material failure modes, including cost and reliability for
  AI features.
- The UX exposes a complete happy path plus meaningful failure states.
- Acceptance criteria are observable from outside the implementation.
- Non-goals prevent scope creep.
- The first slice is small enough to test end to end and meaningful enough to
  learn from.
- Rollout and rollback are possible before broad exposure.

## Anti-Patterns

- Treating the blog post as polished marketing copy instead of a
  product-specification test.
- Writing technical architecture before the target user, painful moment, and
  user-visible promise are clear.
- Using “make it better” or “use an agent” as an outcome.
- Measuring only code delivery, model quality, or test pass rate when the
  intended product result is user behavior.
- Handing the agent a broad feature request with no non-goals, acceptance
  criteria, or decision boundaries.
- Building every database, service, API, and frontend layer before exercising
  one complete user journey.
- Leaving product knowledge only in chat history instead of durable repository
  artifacts.

## Artifact Storage

Prefer durable, reviewable artifacts in the repository:

```text
docs/product/[feature]-launch-post.md
docs/product/[feature]-metrics.md
docs/design/[feature]-ux.html
docs/adr/[feature]-decisions.md
plans/[feature]-vertical-slice.md
```

Link these artifacts from the implementation issue or pull request so future
agents and humans can recover the original intent.
