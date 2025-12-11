import * as model from "../models/tagModel.js";

export const createTagService = async (tags) => {
  return await model.createTagModel(tags);
};
