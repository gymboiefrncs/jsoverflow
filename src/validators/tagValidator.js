import * as z from "zod";
import * as schema from "./tagSchema.js";
import { AppError } from "../utils/AppError.js";

export const validateTags = (req, res, next) => {
  const result = schema.tagsSchema.safeParse(req.body);

  if (!result.success) {
    const errMessage = z.prettifyError(result.error);
    throw new AppError(errMessage, 400);
  }

  req.validatedTags = result.data;
  next();
};
