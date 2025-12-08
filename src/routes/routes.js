import express from "express";
import * as authController from "../controllers/authController.js";
import * as postController from "../controllers/postController.js";
import * as commentController from "../controllers/commentController.js";
import { validateLogin, validateUser } from "../validators/authValidator.js";
import {
  validatePost,
  validatePostUpdate,
} from "../validators/postValidator.js";
import {
  validateComment,
  validateCommentUpdate,
} from "../validators/commentValidator.js";

const router = express.Router();

router.post("/signup", validateUser, authController.signUp);
router.post("/login", validateLogin, authController.login);
router.delete("/logout", authController.logout);

router.post("/post-content", validatePost, postController.postContent);
router.patch(
  "/edit-post-content/:postId",
  validatePostUpdate,
  postController.updatePostContent
);
router.delete("/delete-post/:postId", postController.deletePostContent);

router.post("/post-comment", validateComment, commentController.commentContent);
router.patch(
  "/edit-post-comment/:commentId",
  validateCommentUpdate,
  commentController.updateCommentContent
);
router.delete(
  "/delete-comment/:commentId",
  commentController.deleteCommentContent
);

export default router;
