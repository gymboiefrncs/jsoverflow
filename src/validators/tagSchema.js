import * as z from "zod";

export const tagsSchema = z.object({
  tags: z.array(z.string().toLowerCase()).max(3, "Maximum tag limit exceeded"),
});
