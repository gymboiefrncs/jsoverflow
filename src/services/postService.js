import * as models from "../models/postModel.js";

export const postContentService = async ({ title, content, tags }, userId) => {
  return await models.insertContent(title, content, userId, tags);
};

export const updatePostContentService = async (postId, updateContent) => {
  return await models.updateContent(updateContent, postId);
};

export const deletePostContentService = async (postId) => {
  return await models.deleteContent(postId);
};
