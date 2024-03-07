import {
  deleteTagService,
  fetchTagsService,
  updateTagService,
  createTagService,
} from "../services/tag.service.js";

export const createTag = async (req, res) => {
  try {
    const tagData = req.body;
    const createdTag = await createTagService(tagData);
    return res.status(201).json(createdTag);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "A unexpected error",
    });
  }
};

export const fetchTags = async (req, res) => {
  try {
    const tags = await fetchTagsService();
    return res.status(200).json(tags);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An expected error",
    });
  }
};

export const updateTag = async (req, res) => {
  try {
    const tagData = req.body;
    const tagId = req.params.tagId;
    const updatedTag = await updateTagService(tagId, tagData);
    return res.status(200).json(updatedTag);
  } catch (error) {
    return res.status(500).json({
      message: "A unexpected error",
    });
  }
};

export const deleteTag = async (req, res) => {
  try {
    const tagId = req.params.tagId;
    const deleteResult = await deleteTagService(tagId);
    return res.status(200).json(deleteResult);
  } catch (error) {
    return res.status(500).json({
      message: "A unexpected error",
    });
  }
};
