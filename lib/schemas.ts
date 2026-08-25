import { z } from "zod";

export const WRITING_TYPES = ["case-study", "build-log", "research", "teaching"] as const;

export type WritingType = (typeof WRITING_TYPES)[number];

export const writingTypeSchema = z.enum(WRITING_TYPES);

export const WRITING_TYPE_DIRS = {
  "case-study": "case-studies",
  "build-log": "build-logs",
  research: "research",
  teaching: "teaching",
} as const satisfies Record<WritingType, string>;

export const WRITING_TYPE_LABELS: Record<WritingType, string> = {
  "case-study": "Case study",
  "build-log": "Build log",
  research: "Research",
  teaching: "Teaching",
};

export const WRITING_DIR_TO_TYPE = Object.fromEntries(
  Object.entries(WRITING_TYPE_DIRS).map(([type, dir]) => [dir, type]),
) as Record<(typeof WRITING_TYPE_DIRS)[WritingType], WritingType>;

const isoDate = z.preprocess((value) => {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  return value;
}, z.iso.date());

export const writingFrontmatterSchema = z
  .strictObject({
    title: z.string().min(1),
    date: isoDate,
    description: z.string().min(1),
    type: writingTypeSchema,
    tags: z.array(z.string().min(1)).default([]),
    draft: z.boolean().default(false),
    series: z.string().min(1).optional(),
    part: z.number().int().positive().optional(),
    paper: z.string().min(1).optional(),
    course: z.string().min(1).optional(),
  })
  .superRefine((value, ctx) => {
    if (value.type === "build-log") {
      if (!value.series) {
        ctx.addIssue({ code: "custom", message: "build-log posts require series", path: ["series"] });
      }
      if (value.part === undefined) {
        ctx.addIssue({ code: "custom", message: "build-log posts require part", path: ["part"] });
      }
    }
    if (value.type === "teaching" && !value.course) {
      ctx.addIssue({ code: "custom", message: "teaching posts require course", path: ["course"] });
    }
  });

export type WritingFrontmatter = z.output<typeof writingFrontmatterSchema>;

export function isWritingType(value: string): value is WritingType {
  return (WRITING_TYPES as readonly string[]).includes(value);
}
