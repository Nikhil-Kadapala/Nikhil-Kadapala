import { z } from "zod";
import { isContentAssetId } from "@/lib/content-assets";

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

export const WRITING_TYPE_INDEX: Record<WritingType, { heading: string; description: string }> = {
  "case-study": {
    heading: "Finished work, written up.",
    description: "Problem, approach, result. A case study is the argument after the system shipped, not a catalog card.",
  },
  "build-log": {
    heading: "The work as it happened.",
    description: "Numbered entries in a series. Part by part, while the decisions are still cheap to reverse.",
  },
  research: {
    heading: "An argument next to a paper.",
    description: "Explainers and opinions tied to a paper. The publication record itself lives on /research.",
  },
  teaching: {
    heading: "Notes from the other side of the classroom.",
    description: "Course material from TAing, written so it still works after the semester ends.",
  },
};

export function writingTypePath(type: WritingType): string {
  return `/writing/type/${type}`;
}

/** Reachable by URL, never linked, sitemapped, or indexed. */
export const UNLISTED_WRITING_TYPES = ["teaching"] as const satisfies ReadonlyArray<WritingType>;

export function isUnlistedWritingType(type: WritingType): boolean {
  return (UNLISTED_WRITING_TYPES as readonly WritingType[]).includes(type);
}

export const PUBLIC_WRITING_TYPES = WRITING_TYPES.filter((type) => !isUnlistedWritingType(type));

export const UNLISTED_PAGE_ROBOTS = { index: false, follow: false } as const;

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
    cover: z
      .string()
      .min(1)
      .refine(isContentAssetId, "cover must be a relative path under content/assets")
      .optional(),
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
