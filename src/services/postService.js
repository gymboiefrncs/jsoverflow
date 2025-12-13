import * as models from "../models/postModel.js";
import * as tagService from "./tagService.js";
export const createPostService = async (
  { tags },
  { title, content },
  userId
) => {
  const tagId = await tagService.createTagService(tags);
  return models.createPostModel(title, content, userId, tagId);
};

export const updatePostService = async (postId, { tags }, updateContent) => {
  const tagId = await tagService.createTagService(tags);
  return models.updatePostModel(tagId, updateContent, postId);
};

export const deletePostService = async (postId) => {
  return models.deletePostModel(postId);
};
