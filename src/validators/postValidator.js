import * as z from "zod";
import * as schema from "./postSchema.js";
import { AppError } from "../utils/AppError.js";

export const validatePost = (req, res, next) => {
  const result = schema.postSchema.safeParse(req.body);

  if (!result.success) {
    const errMessage = z.prettifyError(result.error);
    throw new AppError(errMessage, 400);
  }
  req.validatedPost = result.data;
  next();
};
