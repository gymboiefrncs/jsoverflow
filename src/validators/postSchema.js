import * as z from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(1, "Title cant't be empty")
    .max(49)
    .transform((str) => str.trim()),
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
  content: z
    .string()
    .min(1, "Content can't be empty")
    .max(255)
    .transform((str) => str.trim())
    .optional(),
});
