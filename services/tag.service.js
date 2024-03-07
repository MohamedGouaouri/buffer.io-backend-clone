import { TagModel } from "../models/Tag.js";

export const createTagService = async (tag) => {
    try {
        return await TagModel.create(tag)
    } catch (error) {
        // TODO: handle error
        throw error
    }
  };
  
export const fetchTagsService = async () => {
    return TagModel.find()    
};
  
export const updateTagService = async (tagId, newTag) => {
    try {
        return await TagModel.findByIdAndUpdate(tagId, newTag, {
            new: true,
        })
    } catch (error) {
        // TODO: handle error
        throw error
    }
};
  
  export const deleteTagService = async (tagId) => {
    try {
        return await TagModel.findByIdAndDelete(tagId)
    } catch (error) {
        // TODO: handle error
        throw error
    }
  };
  