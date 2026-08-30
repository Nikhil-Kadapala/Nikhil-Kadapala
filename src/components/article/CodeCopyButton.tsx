"use client";

import { useState } from "react";

export function CodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="code-copy"
      aria-label={copied ? "Copied" : "Copy code"}
      onClick={() => {
        void navigator.clipboard.writeText(code);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      }}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
