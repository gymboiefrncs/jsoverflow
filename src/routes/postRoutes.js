import express from "express";
import * as postController from "../controllers/postController.js";
import {
  validatePost,
  validatePostUpdate,
} from "../validators/postValidator.js";

const router = express.Router();

router.post("/post-content", validatePost, postController.postContent);
router.patch(
  "/edit-post-content/:postId",
  validatePostUpdate,
  postController.updatePostContent
);
router.delete("/delete-post/:postId", postController.deletePostContent);

export default router;
