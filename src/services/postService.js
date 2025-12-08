import * as models from "../models/postModel.js";

export const postContentService = async ({ title, content }, userId) => {
  return await models.insertContent(title, content, userId);
};

export const updatePostContentService = async (postId, updateContent) => {
  return await models.updateContent(updateContent, postId);
};

export const deletePostContentService = async (postId) => {
  return await models.deleteContent(postId);
};
