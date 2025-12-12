import * as models from "../models/commentModel.js";

export const createCommentService = async (
  { content, parentId = null },
  userId,
  postId
) => {
  return await models.createCommentModel(content, userId, postId, parentId);
};

export const updateCommentService = async ({ content }, commentId) => {
  return await models.updateCommentModel(content, commentId);
};

export const deleteCommentService = async (commentId) => {
  return await models.deleteCommentModel(commentId);
};
