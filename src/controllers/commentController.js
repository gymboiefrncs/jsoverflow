import * as commentService from "../services/commentService.js";

export const commentContent = async (req, res) => {
  const newComment = await commentService.commentContentService(
    req.validatedComment,
    req.session.userId,
    req.body.postId
  );

  return res.status(201).json({ newComment });
};

export const updateCommentContent = async (req, res) => {
  const updateComment = await commentService.updateCommentService(
    req.validatedUpdateComment,
    req.params.commentId
  );
  return res.status(201).json({ updateComment });
};
