import * as service from "../services/authService.js";

export const signUpController = async (req, res) => {
  const newUser = await service.signUpService(req.validatedBody);
  return res.status(200).json({ newUser });
};

export const logInController = async (req, res) => {
  const session = await service.logInService(req.validatedBody);
  req.session.userId = session.id;
  req.session.username = session.username;
  return res.status(200).json({ message: "logged in" });
};

export const logOutController = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie("connect.sid");
    return res.status(200).json({ message: "logged out" });
  });
};
