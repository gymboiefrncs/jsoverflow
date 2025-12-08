import * as models from "../models/commentModel.js";

export const commentContentService = async (
  { content, parentId = null },
  userId,
  postId
) => {
  return await models.insertComment(content, userId, postId, parentId);
};

export const updateCommentService = async ({ content }, commentId) => {
  return await models.updateComment(content, commentId);
};

export const deleteCommentService = async (commentId) => {
  return await models.deleteComment(commentId);
};
