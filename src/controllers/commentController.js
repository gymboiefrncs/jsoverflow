import * as commentService from "../services/commentService.js";

export const commentContent = async (req, res) => {
  const newComment = await commentService.commentContentService(
    req.validatedComment,
    req.session.userId,
    req.body.postId
  );

  return res.status(201).json({ newComment });
};
