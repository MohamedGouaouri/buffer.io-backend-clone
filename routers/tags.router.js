import express from "express";
import {
  createTag,
  deleteTag,
  fetchTags,
  updateTag,
} from "../controllers/tags.controller";
import { TagRequestValidator } from "../middlewares/validators/tags/create-update-tag.validator";

const router = express.Router();

router.post("/", TagRequestValidator, createTag);

router.get("/", fetchTags);

router.put("/", TagRequestValidator, updateTag);

router.delete("/", deleteTag);

export default router;
