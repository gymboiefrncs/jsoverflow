import express from "express";
import * as postController from "../controllers/postController.js";
import {
  validatePost,
  validatePostUpdate,
} from "../validators/postValidator.js";
import { validateTags } from "../validators/tagValidator.js";

const router = express.Router();

router.post(
  "/post-content",
  validatePost,
  validateTags,
  postController.createPostController
);

router.patch(
  "/edit-post-content/:postId",
  validatePostUpdate,
  postController.updatePostController
);
router.delete("/delete-post/:postId", postController.deletePostController);

export default router;
