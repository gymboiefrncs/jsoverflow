import * as models from "../models/commentModel.js";

export const commentContentService = async (
  { content, parentId = null },
  userId,
  postId
) => {
  return await models.insertComment(content, userId, postId, parentId);
};
