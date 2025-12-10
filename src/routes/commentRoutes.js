import express from "express";
import * as commentController from "../controllers/commentController.js";
import {
  validateComment,
  validateCommentUpdate,
} from "../validators/commentValidator.js";

const router = express.Router();

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
