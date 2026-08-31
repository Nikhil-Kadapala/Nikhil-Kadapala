"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects, research } from "@/lib/content";
import { fadeUpReveal, heroStagger, scrollReveal } from "@/lib/animations";
import { KnowledgeGraph } from "@/components/research/KnowledgeGraph";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const paper = research[0];

const interests = [
  ["Knowledge & memory", "What an agent actually knows, not just what it retrieved once. Retrieval is a lookup; knowing is what survives the next turn."],
  ["Agent evals", "Score the behavior against intent, not a storyboarded workflow. A golden trace is a useful fixture and a terrible definition of success."],
  ["Inference engineering", "Disaggregated prefill/decode, speculative decoding, prefix caching. Cheaper and faster serving, without pretending that's the same as a smarter model."],
];

const statusItems = [
  { label: "NOW", value: "PhD · University of New Hampshire" },
  { label: "FOCUS", value: "Agent evals · memory · RAG" },
  { label: "PAPER", value: "CheckThat! · CLEF 2025", live: true },
] as const;

export function HomePage() {
  const reduce = useReducedMotion();
  const reveal = (index = 0) => scrollReveal(index, reduce);

  return (
    <>
      <section className="hero-lab wrap">
        <motion.div
          className="hero-lab-grid"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div className="hero-copy" variants={fadeUpReveal}>
            <p className="eyebrow mono">NIKHIL KADAPALA / PHD STUDENT · UNH</p>
            <h1>What does the agent actually know?</h1>
            <p className="hero-sub">I build AI systems that have to work on messy, real-world text, then I try to measure whether they actually do. My PhD is on agent evals: knowledge bases, retrieval, and memory.</p>
            <div className="hero-cta">
              <Button asChild>
                <Link href="/research">Read the research <span>↗</span></Link>
              </Button>
              <Button variant="link" asChild className="text-link">
                <Link href="/projects">Browse systems <span>→</span></Link>
              </Button>
            </div>
          </motion.div>
          <motion.div variants={fadeUpReveal}>
            <KnowledgeGraph />
          </motion.div>
        </motion.div>
      </section>

      <section className="status-band">
        <div className="wrap status-grid">
          {statusItems.map((item, index) => (
            <motion.div key={item.label} {...reveal(index)}>
              <span>{item.label}</span>
              <strong>
                {"live" in item && item.live ? <><i className="live-dot" />{item.value}</> : item.value}
              </strong>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="thesis-section">
        <div className="wrap thesis-grid">
          <motion.div {...reveal(0)}>
            <p className="eyebrow mono">01 / THE ARGUMENT</p>
            <h2>Retrieval is not knowing.</h2>
          </motion.div>
          <motion.div {...reveal(1)}>
            <p>A high score can describe a system nobody can use. I keep running into the same gap: the metric goes up, and the thing a person actually needed still isn&rsquo;t there. That distance — between a plausible answer and a useful one — is most of what I work on.</p>
            <Link className="link-arrow" href="/about">How I approach it</Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <motion.div className="section-top" {...reveal(0)}>
            <div>
              <p className="eyebrow mono">PUBLISHED RESEARCH</p>
              <h2>The score is not the work.</h2>
            </div>
            <Link className="link-arrow" href="/research">Research index</Link>
          </motion.div>
          <motion.div {...reveal(1)}>
            <Link href={`/research/${paper.slug}`} className="block text-inherit no-underline">
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle>{paper.title}</CardTitle>
                  <CardDescription>{paper.detail}</CardDescription>
                  <CardAction>
                    <span className="mono muted">
                      {paper.year}
                      {paper.tags.length ? ` · ${paper.tags.join(" · ")}` : ""}
                    </span>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-wrap gap-3">
                  {paper.links.map((l) => (
                    <span key={l.label}>{l.label} ↗</span>
                  ))}
                  <em className="link-arrow">Read the writeup</em>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="work-section">
        <div className="wrap">
          <motion.div className="section-top" {...reveal(0)}>
            <div>
              <p className="eyebrow mono">SELECTED SYSTEMS</p>
              <h2>Things I actually shipped.</h2>
            </div>
            <Link className="link-arrow" href="/projects">All systems</Link>
          </motion.div>
          <div className="artifact-list flex flex-col gap-4">
            {projects.filter(p => p.featured).map((p, index) => (
              <motion.div key={p.slug} {...reveal(index)}>
                <Link href={`/projects/${p.slug}`} className="block text-inherit no-underline">
                  <Card size="sm" className="cursor-pointer">
                    <CardHeader>
                      <CardTitle>{p.name}</CardTitle>
                      <CardDescription>{p.summary}</CardDescription>
                      <CardAction>
                        <span className="tag">{p.kind}</span>
                      </CardAction>
                    </CardHeader>
                    <CardFooter className="justify-between">
                      <span className="mono muted">0{index + 1} · {p.status}</span>
                      <span className="link-arrow">Open</span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <motion.div className="section-top" {...reveal(0)}>
            <div>
              <p className="eyebrow mono">CURRENTLY INTO</p>
              <h2>Open questions.</h2>
            </div>
            <span className="section-index">[ 01—03 ]</span>
          </motion.div>
          <div className="primitive-grid">
            {interests.map(([title, copy], index) => (
              <motion.article key={title} {...reveal(index)}>
                <span className="mono">0{index + 1} / {title}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="follow-section">
        <div className="wrap follow">
          <motion.div {...reveal(0)}>
            <p className="eyebrow mono">SAY HELLO</p>
            <h2>Got a weird eval problem?</h2>
            <p>Always happy to talk about research, agents, or evaluation that refuses to behave. LinkedIn or X is the easiest ping.</p>
          </motion.div>
          <motion.div className="flex flex-wrap gap-3" {...reveal(1)}>
            <Button asChild>
              <a href="https://github.com/Nikhil-Kadapala" target="_blank" rel="noopener noreferrer">
                GitHub <span>↗</span>
              </a>
            </Button>
            <Button variant="quiet" asChild>
              <a href="https://www.linkedin.com/in/nikhil-kadapala" target="_blank" rel="noopener noreferrer">
                LinkedIn <span>↗</span>
              </a>
            </Button>
            <Button variant="quiet" asChild>
              <a href="https://x.com/Nikhil_Kadapala" target="_blank" rel="noopener noreferrer">
                X <span>↗</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
