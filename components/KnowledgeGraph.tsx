"use client";

import { useState } from "react";

type Node = { id: string; x: number; y: number };
type Thread = Node & { label: string; copy: string };
type Artifact = Node & { name: string; meta: string; href: string };

const threads: Thread[] = [
  { id: "kb", x: 132, y: 64, label: "Knowledge bases", copy: "What the system is allowed to know." },
  { id: "retrieval", x: 84, y: 188, label: "Retrieval", copy: "What it pulled back, and whether that was enough." },
  { id: "memory", x: 108, y: 310, label: "Memory", copy: "What survives after the retrieval is over." },
  { id: "evals", x: 172, y: 426, label: "Evals", copy: "Whether the behavior matched the intent." },
];

const artifacts: Artifact[] = [
  // Trailing slashes are explicit: these are plain SVG anchors, so Next's
  // `trailingSlash: true` rewrite does not apply to them.
  { id: "checkthat", x: 452, y: 76, name: "CheckThat!", meta: "CLEF 2025 · paper", href: "/research/claim-extraction-checkthat-2025/" },
  { id: "agentic-rag", x: 486, y: 198, name: "agentic-rag", meta: "multimodal RAG + evals", href: "/projects/agentic-rag/" },
  { id: "harnessbox", x: 450, y: 320, name: "HarnessBox", meta: "agent harness primitives", href: "/projects/harnessbox/" },
  { id: "resalign", x: 402, y: 428, name: "ResAlign AI", meta: "career intelligence", href: "/projects/resalign/" },
];

const edges: [string, string][] = [
  ["kb", "checkthat"], ["kb", "resalign"],
  ["retrieval", "agentic-rag"], ["retrieval", "resalign"],
  ["memory", "agentic-rag"], ["memory", "harnessbox"],
  ["evals", "checkthat"], ["evals", "agentic-rag"], ["evals", "harnessbox"],
];

const byId = new Map<string, Node>([...threads, ...artifacts].map(n => [n.id, n]));

/** Related ids for a focused node, including itself. */
function neighborhood(id: string) {
  const set = new Set([id]);
  for (const [t, a] of edges) {
    if (t === id) set.add(a);
    if (a === id) set.add(t);
  }
  return set;
}

/** Horizontal-tangent bezier so edges leave and enter their nodes flat. */
function path(from: Node, to: Node) {
  return `M${from.x} ${from.y} C${from.x + 96} ${from.y} ${to.x - 96} ${to.y} ${to.x} ${to.y}`;
}

export function KnowledgeGraph() {
  const [active, setActive] = useState<string | null>(null);
  const lit = active ? neighborhood(active) : null;
  const state = (id: string) => (lit ? (lit.has(id) ? "on" : "off") : "idle");
  const activeThread = threads.find(t => t.id === active);
  const activeArtifact = artifacts.find(a => a.id === active);

  return (
    <div className="kgraph" onMouseLeave={() => setActive(null)}>
      <div className="kgraph-bar">
        <span>research map</span>
        <span>{active ? `${lit!.size - 1} linked` : "4 threads · 4 artifacts"}</span>
      </div>

      <svg viewBox="0 0 600 480" role="img" aria-label="Research map: four research threads wired to four artifacts" className="kgraph-svg">
        <g className="kgraph-edges">
          {edges.map(([t, a], i) => (
            <path
              key={`${t}-${a}`}
              d={path(byId.get(t)!, byId.get(a)!)}
              pathLength={1}
              data-state={lit ? (lit.has(t) && lit.has(a) ? "on" : "off") : "idle"}
              style={{ animationDelay: `${240 + i * 70}ms` }}
            />
          ))}
        </g>

        {threads.map((t, i) => (
          <g
            key={t.id}
            className="kgraph-thread"
            data-state={state(t.id)}
            style={{ animationDelay: `${i * 60}ms` }}
            tabIndex={0}
            role="button"
            aria-label={`${t.label}. ${t.copy}`}
            onMouseEnter={() => setActive(t.id)}
            onFocus={() => setActive(t.id)}
            onBlur={() => setActive(null)}
          >
            <text x={t.x} y={t.y - 20} textAnchor="middle">{t.label.toUpperCase()}</text>
            <circle cx={t.x} cy={t.y} r="6" />
            <circle cx={t.x} cy={t.y} r="15" className="kgraph-halo" />
          </g>
        ))}

        {artifacts.map((a, i) => (
          <a key={a.id} href={a.href} className="kgraph-artifact" data-state={state(a.id)} style={{ animationDelay: `${180 + i * 60}ms` }}
            onMouseEnter={() => setActive(a.id)} onFocus={() => setActive(a.id)} onBlur={() => setActive(null)}>
            <rect x={a.x - 7} y={a.y - 7} width="14" height="14" rx="3" />
            <text x={a.x + 22} y={a.y - 2}>{a.name}</text>
            <text x={a.x + 22} y={a.y + 14} className="kgraph-meta">{a.meta}</text>
          </a>
        ))}
      </svg>

      <div className="kgraph-foot">
        <span>{activeThread?.label ?? activeArtifact?.name ?? "hover a node to trace its links"}</span>
        <span className="kgraph-hint">{activeThread?.copy ?? activeArtifact?.meta ?? ""}</span>
      </div>
    </div>
  );
}
