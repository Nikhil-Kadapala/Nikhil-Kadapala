import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-md font-mono text-xs font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-foreground",
        quiet: "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-border-strong",
        ghost: "text-foreground hover:bg-secondary",
        link: "text-foreground hover:text-accent",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 rounded-sm px-3",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
