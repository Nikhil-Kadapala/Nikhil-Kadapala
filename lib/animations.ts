import type { Transition, Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const scrollViewport = { once: true, margin: "-60px" } as const;

export function scrollReveal(
  index = 0,
  reduce: boolean | null,
): {
  variants: Variants;
  initial: "hidden";
  whileInView: "visible";
  viewport: typeof scrollViewport;
  transition: Transition;
} {
  return {
    variants: reduce
      ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
      : fadeInUp,
    initial: "hidden",
    whileInView: "visible",
    viewport: scrollViewport,
    transition: {
      duration: reduce ? 0.2 : 0.5,
      delay: reduce ? 0 : index * 0.1,
    },
  };
}
