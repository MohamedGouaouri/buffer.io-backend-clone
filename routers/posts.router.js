import express from "express";
import { createPostValidator } from "../middlewares/validators/posts/create-post.validator.js";
import {
  createPostController,
  getPostsController,
  schedulePostController,
  sharePostController,
} from "../controllers/posts.controller.js";

const router = express.Router();

// List all posts
router.get("/", getPostsController);

// Create a post
router.post("/create", createPostValidator, createPostController);

router.delete("/:postId", (req, res) => {
  // TODO: Implement delete
});

router.put("/:postId/schedule", schedulePostController);

router.put("/:postId/share", sharePostController);

export default router;
