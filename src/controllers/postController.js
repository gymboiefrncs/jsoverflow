import * as postService from "../services/postService.js";

export const postContent = async (req, res) => {
  if (!req.session.userId)
    throw new AppError("session expired. please log in", 500);
  const newPost = await postService.postContentService(
    req.validatedPost,
    req.session.userId
  );
  return res.status(201).json({ newPost });
};
