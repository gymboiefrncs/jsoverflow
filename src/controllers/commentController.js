import * as commentService from "../services/commentService.js";

export const commentController = async (req, res) => {
  const newComment = await commentService.commentService(
    req.validatedComment,
    req.session.userId,
    req.body.postId
  );

  return res.status(201).json({ newComment });
};

export const updateCommentController = async (req, res) => {
  const updateComment = await commentService.updateCommentService(
    req.validatedUpdateComment,
    req.params.commentId
  );
  return res.status(201).json({ updateComment });
};

export const deleteCommentController = async (req, res) => {
  await commentService.deleteCommentService(req.params.commentId);
  return res.status(200).json({ message: "deleted successfully" });
};
