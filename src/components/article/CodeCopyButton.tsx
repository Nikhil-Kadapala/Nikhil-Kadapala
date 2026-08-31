"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      type="button"
      variant="quiet"
      size="sm"
      className="h-auto px-2.5 py-1.5 text-(length:--text-mono-xs) uppercase tracking-wider text-muted-foreground"
      aria-label={copied ? "Copied" : "Copy code"}
      onClick={() => {
        void navigator.clipboard.writeText(code);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      }}
    >
      {copied ? "Copied" : "Copy"}
    </Button>
  );
}
