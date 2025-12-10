import * as models from "../models/commentModel.js";

export const commentService = async (
  { content, parentId = null },
  userId,
  postId
) => {
  return await models.insertCommentModel(content, userId, postId, parentId);
};

export const updateCommentService = async ({ content }, commentId) => {
  return await models.updateCommentModel(content, commentId);
};

export const deleteCommentService = async (commentId) => {
  return await models.deleteCommentModel(commentId);
};
