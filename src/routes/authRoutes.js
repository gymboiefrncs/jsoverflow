import express from "express";
import * as authController from "../controllers/authController.js";
import { validateLogin, validateUser } from "../validators/authValidator.js";

const router = express.Router();

router.post("/signup", validateUser, authController.signUpController);
router.post("/login", validateLogin, authController.logInController);
router.delete("/logout", authController.logOutController);

export default router;
