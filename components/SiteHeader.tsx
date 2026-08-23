"use client";

import Link from "next/link";
import { useState } from "react";
import { GitHubIcon, PursuitMark } from "@/components/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="header-inner wrap"><Link href="/" className="brand" onClick={close} aria-label="Nikhil's Pursuit — home"><PursuitMark /><span>Nikhil&rsquo;s Pursuit</span></Link><nav id="nav" className={open ? "nav open" : "nav"} aria-label="Primary"><Link href="/about" onClick={close}>About</Link><Link href="/writing" onClick={close}>Blog</Link><Link href="/research" onClick={close}>Research</Link><Link href="/projects" onClick={close}>Projects</Link></nav><div className="header-actions"><Link href="https://github.com/Nikhil-Kadapala" className="header-cta" target="_blank" rel="noopener noreferrer"><GitHubIcon size={16} /><span className="header-cta-label">GitHub</span><span className="ext" aria-hidden="true">↗</span></Link><button className="menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button></div></div></header>;
}
