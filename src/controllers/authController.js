import * as service from "../services/authService.js";

export const signUp = async (req, res) => {
  const newUser = await service.signUpService(req.validatedBody);
  return res.status(200).json({ newUser });
};

export const login = async (req, res) => {
  const session = await service.logInService(req.validatedBody);
  req.session.userId = session.id;
  req.session.username = session.username;
  console.log("session req", req.session);
  console.log("session var", session);
  return res.status(200).json({ message: "logged in" });
};
