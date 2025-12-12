import * as models from "../models/postModel.js";
import * as tagService from "./tagService.js";
export const postService = async ({ tags }, { title, content }, userId) => {
  const tagId = await tagService.createTagService(tags);
  return await models.insertPostModel(title, content, userId, tagId);
};

export const updatePostService = async (postId, updateContent) => {
  return await models.updatePostModel(updateContent, postId);
};

export const deletePostService = async (postId) => {
  return await models.deletePostModel(postId);
};
