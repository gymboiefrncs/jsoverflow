import * as z from "zod";

export const commentSchema = z.object({
  content: z.string().min(1, "comment cant be empty"),
  parentId: z.number().optional(),
});

export const updateCommentSchema = z.object({
  content: z.string().min(1, "reply cant be empty"),
});
