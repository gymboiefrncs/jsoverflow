import * as z from "zod";

export const userSchema = z.object({
  username: z.string().min(1).max(49),
  email: z.email(),
  password: z.string().min(6, "Password too short"),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.coerce.string(),
});
