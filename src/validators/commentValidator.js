import * as z from "zod";
import * as schema from "./commentSchema.js";
import { AppError } from "../utils/AppError.js";

export const validateComment = (req, res, next) => {
  const result = schema.commentSchema.safeParse(req.body);

  if (!result.success) {
    const errMessage = z.prettifyError(result.error);
    throw new AppError(errMessage, 400);
  }
  req.validatedComment = result.data;
  next();
};

export const validateCommentUpdate = (req, res, next) => {
  const result = schema.updateCommentSchema.safeParse(req.body);

  if (!result.success) {
    const errMessage = z.prettifyError(result.error);
    throw new AppError(errMessage, 400);
  }

  req.validatedUpdateComment = result.data;
  next();
};
