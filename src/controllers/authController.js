import * as service from "../services/authService.js";
import { AppError } from "../utils/AppError.js";

export const signUp = async (req, res) => {
  const newUser = await service.signUpService(req.validatedBody);
  return res.status(200).json({ newUser });
};

export const login = async (req, res) => {
  const session = await service.logInService(req.validatedBody);
  req.session.userId = session.id;
  req.session.username = session.username;
  return res.status(200).json({ message: "logged in" });
};

export const logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie("connect.sid");
    return res.status(200).json({ message: "logged out" });
  });
};

export const test = (req, res) => {
  if (!req.session.userId)
    return res.status(401).send("Session expired or not logged in");
  res.send(`Hello user ${req.session.username}`);
};
