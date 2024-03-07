import express from "express";
import { createPostValidator } from "../middlewares/validators/posts/create-post.validator.js";
import {
  createPostController,
  getPostsController,
} from "../controllers/posts.controller.js";

const router = express.Router();

// List all posts
router.get("/", getPostsController);

// Create a post
router.post("/create", createPostValidator, createPostController);

router.delete("/:postId", (req, res) => {
  // TODO: Implement delete
});

export default router;
