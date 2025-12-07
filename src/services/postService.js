import * as models from "../models/postModel.js";

export const postContentService = async ({ title, content }, userId) => {
  return await models.insertContent(title, content, userId);
};
