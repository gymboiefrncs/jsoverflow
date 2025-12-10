import * as z from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(1, "Title cant't be empty")
    .max(49)
    .transform((str) => str.trim()),
  tags: z
    .array(
      z
        .string()
        .min(1)
        .toLowerCase()
        .transform((str) => str.trim())
    )
    .superRefine((val, ctx) => {
      if (val.length > 5) {
        ctx.addIssue({
          code: "too_big",
          maximum: 5,
          type: "array",
          inclusive: true,
          message: "Too many items",
          path: [],
        });
      }

      const seen = new Set();
      val.forEach((tag, i) => {
        if (seen.has(tag)) {
          ctx.addIssue({
            code: "custom",
            message: `Duplicate tag ${tag}`,
            path: [i],
          });
        } else {
          seen.add(tag);
        }
      });
    }),
  content: z
    .string()
    .min(1, "Content can't be empty")
    .max(255)
    .transform((str) => str.trim()),
});

export const updatePostSchema = z.object({
  title: z
    .string()
    .min(1, "Title cant't be empty")
    .max(49)
    .transform((str) => str.trim())
    .optional(),
  tags: z.array(z.string().lowercase()),
  content: z
    .string()
    .min(1, "Content can't be empty")
    .max(255)
    .transform((str) => str.trim())
    .optional(),
});
