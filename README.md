I'm Nikhil. I build AI systems that have to work on messy, real-world text — then I try to measure whether they actually do.

These days I'm in San Francisco, founding [ResAlign](https://resalign.com): career intelligence that tells you *why* a role is (or isn't) a fit, not just a score. Fit analysis, skill gaps, learning roadmaps, job matching. The kind of product you only build after watching ranking models collapse the whole story into a number.

Before that I spent a year with [Laura Dietz](https://www.cs.unh.edu/~dietz/)'s lab at UNH on claim extraction for fact-checkers. The finding I still think about: the run that won on METEOR wasn't always the claim a human fact-checker would actually want. Optimizing a metric vs. being useful is a tension I keep running into — in research, in RAG eval, in product.

I came up through electronics, IoT, and a detour through SAP security at TCS. Then an MS in Computer Science at UNH (May 2025). I'm not a grind-LeetCode-all-day person. I am a first-principles, top-down one: break the problem open, figure out what actually matters, ship something you can defend.

<br/>

### currently building

- **[ResAlign](https://resalign.com)** — resume–JD alignment and career intelligence. FastAPI, Next.js, eval-heavy LLM pipelines.
- **[CheckThat](https://github.com/Nikhil-Kadapala/checkthat)** — noisy social posts → concise, checkable claims. Iterative refinement with custom G-Eval. Research that grew a product and a [`pip install`](https://github.com/Nikhil-Kadapala/checkthat-py).
- **[HarnessBox](https://github.com/Nikhil-Kadapala/HarnessBox)** — sandbox, workspace, and harness primitives for coding agents. Zero dependencies, on purpose.
- **[agentic-rag](https://github.com/Nikhil-Kadapala/agentic-rag)** — multimodal agentic RAG with a real eval harness, because "it felt pretty good" is not a metric.

### research

[**UNH at CheckThat! 2025: Fine-tuning Vs Prompting in Claim Extraction**](https://arxiv.org/abs/2509.06883)
Wilder, Kadapala, Xu, Alsaadi, Parsons, Rogers, Agrawal, Hassick, Dietz. CLEF 2025 Working Notes.

We ran a wide net over fine-tuning (FLAN-T5, LoRA, a distilled Llama) and prompting (few-shot, self-refinement, self-scoring) for CheckThat! Task 2: given a social post, extract one succinct claim a fact-checker can verify. Fine-tuned FLAN-T5 won the official METEOR ranking for us. Other methods sometimes produced claims that were simply *better to work with*. Team ranked 9th overall; I also submitted a solo run.

[paper](https://arxiv.org/abs/2509.06883) · [CEUR](https://ceur-ws.org/Vol-4038/paper_103.pdf) · [interactive writeup](https://github.com/Nikhil-Kadapala/checkthat-research-paper)

Earlier: teaching nets to rationalize sentiment with human annotations and [LIME feedback](https://github.com/Nikhil-Kadapala/Rational-NeuralNets). Still the same question — can the model show its work in a way a person would recognize?

### previously

- **MS, Computer Science** — University of New Hampshire, 2022–2025. NLP (FAccTML, interpretability), knowledge graphs, neural nets, the usual systems stack.
- **IT Help Desk** — UNH, 2024–2025. Hardware, accounts, the unglamorous stuff that keeps a campus online. Made me faster at isolating the actual failure.
- **SAP Security Consultant** — Tata Consultancy Services, 2021–2022. Roles, SoD, the boring-but-load-bearing layer of enterprise software.

### currently into

Knowledge bases, graphs, and memory — the stuff an agent actually *knows*, not just what it retrieved once. How you structure that knowledge, how it persists across a session (or a week), and whether the graph is a real model of the world or a pile of triples wearing a costume ([rdf-to-okf](https://github.com/Nikhil-Kadapala/rdf-to-okf)).

Agent evals, specifically: score the behavior against intent, not against a rigid workflow. Did it do the thing you meant, even if the path wasn't the one you storyboarded? A golden trace is a useful fixture. It is a terrible definition of success.

Always happy to talk about research, agents, or a weird eval problem. [LinkedIn](https://www.linkedin.com/in/nikhil-kadapala) is the easiest ping; the [site](https://nikhil-kadapala.github.io) has the longer version.

<br/>

`Python` · `TypeScript` · `PyTorch` · `FastAPI` · `Next.js` · `RAG` · `LLM eval` · `fine-tuning`
