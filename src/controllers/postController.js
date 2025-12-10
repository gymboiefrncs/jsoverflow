import { application } from "express";
import * as postService from "../services/postService.js";
import { AppError } from "../utils/AppError.js";

export const postController = async (req, res) => {
  if (!req.session.userId)
    throw new AppError("session expired. please log in", 400);
  const newPost = await postService.postService(
    req.validatedPost,
    req.session.userId
  );
  return res.status(201).json({ newPost });
};

export const updatePostController = async (req, res) => {
  if (!req.session.userId)
    throw new AppError("session expired. please log in", 400);

  const updatedPost = await postService.updatePostService(
    req.params.postId,
    req.validatedUpdatePost,
    req.session.userId
  );
  return res.status(201).json({ updatedPost });
};

export const deletePostController = async (req, res) => {
  await postService.deletePostService(req.params.postId);
  return res.status(200).json({ message: "deleted successfully" });
};
