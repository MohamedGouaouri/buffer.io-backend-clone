import express from "express";
import {
  createTag,
  deleteTag,
  fetchTags,
  updateTag,
} from "../controllers/tags.controller.js";
import { TagRequestValidator } from "../middlewares/validators/tags/create-update-tag.validator.js";

const router = express.Router();

router.post("/", TagRequestValidator, createTag);

router.get("/", fetchTags);

router.put("/:tagId", TagRequestValidator, updateTag);

router.delete("/:tagId", deleteTag);

export default router;
