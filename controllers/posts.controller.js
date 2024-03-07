import {
  createPostService,
  getPostByIdService,
  getPostsService,
  sharePostService,
  updatePostScheduleService,
} from "../services/posts.service.js";

export async function getPostsController(req, res) {
  // TODO: Validate filters
  const filters = {
    status: req.query.status,
    start_date: req.query.start_date,
    end_date: req.query.end_date,
  };

  // Extract the user id
  const userId = req.query.userId;
  if (!userId)
    return res.status(400).json({
      message: "User id is required",
    });
  const posts = await getPostsService(userId, filters);
  res.status(200).json(posts);
}

export async function createPostController(req, res) {
  const postData = req.body.post;
  const userId = req.body.userId;
  const channelId = req.body.channelId;
  try {
    const createdPost = await createPostService(userId, postData);
    // Assing post to channel
    // const createdChannelLink = await assignChannelPostService(createdPost._id, channelId);
    return res.status(201).json(createdPost);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function schedulePostController(req, res) {
  let { postId } = req.params;
  let { scheduleDate } = req.body;

  try {
    const updatedPost = await updatePostScheduleService(postId, scheduleDate);
    return res.status(202).json(updatedPost);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function sharePostController(req, res) {
  let { postId } = req.params;

  try {
    let post = await getPostByIdService(postId);
    if (post.isApproved) {
      // we share it
      const updatedPost = await sharePostService(postId);
      return res.status(202).json(updatedPost);
    } else {
      return res.status(400).json({ message: "Post is not approved yet" });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export function deletePostController(postId) {}
