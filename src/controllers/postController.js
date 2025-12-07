import * as postService from "../services/postService.js";

export const postContent = async (req, res) => {
  const newPost = await postService.postContentService(
    req.validatedPost,
    req.session.userId
  );
  return res.status(201).json({ newPost });
};
