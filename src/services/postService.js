import * as models from "../models/postModel.js";

export const postService = async ({ title, content, tags }, userId) => {
  return await models.insertPostModel(title, content, userId, tags);
};

export const updatePostService = async (postId, updateContent) => {
  return await models.updatePostModel(updateContent, postId);
};

export const deletePostService = async (postId) => {
  return await models.deletePostModel(postId);
};
