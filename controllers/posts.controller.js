import {
  createPostService,
  getPostsService,
} from "../services/posts.service.js";

export function getPostsController(req, res) {
  // TODO: Validate filters
  const filters = {
    status: req.query.status,
    start_date: req.query.start_date,
    end_date: req.query.end_date,
  };
  const posts = getPostsService(filters);
  if (response.status == "success") {
    return res.status(200).json(response);
  }
  return res.status(500).json({
    message: "An expected error",
  });
}

export function createPostController(post) {
  const createdPost = createPostService(post);
  return {
    status: "success",
    error: null,
    data: createdPost,
  };
}

export function deletePostController(postId) {}
