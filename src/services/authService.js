import * as models from "../models/authModel.js";
import * as bcrypt from "bcrypt";
import { AppError } from "../utils/AppError.js";

export const signUpService = async (data) => {
  const { password, ...rest } = data;
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashed_password = await bcrypt.hash(password, salt);
  return await models.createUserModel(hashed_password, rest);
};

export const logInService = async (data) => {
  const { password, email } = data;

  const userExist = await models.findUserModel(email);
  if (!userExist) throw new AppError("Invalid credentials", 401);

  const isPasswordValid = await bcrypt.compare(password, userExist.password);
  if (!isPasswordValid) throw new AppError("Invalid credentials", 401);

  return userExist;
};
