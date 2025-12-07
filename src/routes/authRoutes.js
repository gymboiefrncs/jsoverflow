import express from "express";
import * as controller from "../controllers/authController.js";
import { validateLogin, validateUser } from "../validators/authValidator.js";
const router = express.Router();

router.post("/signup", validateUser, controller.signUp);
router.post("/login", validateLogin, controller.login);
router.delete("/logout", controller.logout);
export default router;
