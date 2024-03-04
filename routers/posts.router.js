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
router.post("/create", createPostValidator, (req, res) => {
  const data = req.body;
  const createPostResponse = createPostController(data);
  if (createPostResponse.status == "success") {
    return res.status(201).json(createPostResponse);
  }
  return res.status(500).json({
    message: "An unexpected error",
  });
});

// Update post schedule
router.delete("/:postId", (req, res) => {
  // TODO: Implement delete
});

export default router;
