import express from "express";
import * as authController from "../controllers/authController.js";
import { catchAsync } from "../utils/catchAsync.js";
import { validateLogin, validateUser } from "../validators/authValidator.js";
const router = express.Router();

router.post("/signup", validateUser, catchAsync(authController.signUp));
router.post("/login", validateLogin, authController.login);

export default router;
