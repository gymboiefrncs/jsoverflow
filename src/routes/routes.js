import express from "express";
import * as authController from "../controllers/authController.js";
import * as postController from "../controllers/postController.js";
import { validateLogin, validateUser } from "../validators/authValidator.js";
import { validatePost } from "../validators/postValidator.js";
const router = express.Router();

router.post("/signup", validateUser, authController.signUp);
router.post("/login", validateLogin, authController.login);
router.delete("/logout", authController.logout);

router.post("/post-content", validatePost, postController.postContent);

export default router;
