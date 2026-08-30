"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-border bg-background p-6 focus:outline-none",
          className,
        )}
        {...props}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export function SheetTitle({ className, ...props }: React.ComponentProps<typeof Dialog.Title>) {
  return <Dialog.Title className={cn("font-mono text-xs uppercase tracking-widest text-muted-foreground", className)} {...props} />;
}
