import * as z from "zod";
import { AppError } from "../utils/AppError.js";
import * as schema from "./authSchema.js";

export const validateUser = (req, res, next) => {
  const result = schema.userSchema.safeParse(req.body);

  if (!result.success) {
    const errMessage = z.prettifyError(result.error);
    return next(new AppError(errMessage, 400));
  }

  req.validatedBody = result.data;
  next();
};

export const validateLogin = (req, res, next) => {
  const result = schema.loginSchema.safeParse(req.body);

  if (!result) {
    const errMessage = z.prettifyError(result.error);
    return next(new AppError(errMessage, 400));
  }
  req.validatedBody = result.data;
  next();
};
