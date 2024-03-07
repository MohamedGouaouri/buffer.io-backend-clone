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

  // Extract the user id
  const userId = req.body.userId;
  if (!userId) return  res.status(400).json({
    message: "User id is required",
  });
  const posts = getPostsService(userId, filters);
  if (response.status == "success") {
    return res.status(200).json(response);
  }
  return res.status(500).json({
    message: "An expected error",
  });
}

export async function createPostController(req, res) {
  const postData = req.body.post
  const userId = req.body.userId
  try {
    const createdPost = await createPostService(userId, postData);
    return res.status(201).json(createdPost)
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
  
}

export function deletePostController(postId) {}
