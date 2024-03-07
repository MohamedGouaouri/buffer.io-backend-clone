import { PostModel } from "../models/Post.js";
import { UserModel } from "../models/User.js";
import { FACEBOOK_CHANNEL } from "./channels.service.js";

let lastPostId = 0;

const postsDB = [
  {
    postId: lastPostId,
    description: "Description of a post",
    attachment_url: "https://uploads.buffer.io/filexyz",
    schedule_date: new Date(),
    sent_date: null,
    is_draft: false,
    is_approved: true,
    tags: [],
    channel: FACEBOOK_CHANNEL,
  },
];
export const POST_STATUS_SENT = "SENT";
export const POST_STATUS_DRAFT = "DRAFT";
export const POST_STATUS_SCHEDULED = "SCHEDULED";

export function getPostsService(userId, filters) {
  let filterObject = {
    user: userId,
  };
  if (filters.start_date && filters.end_date) {
    filterObject["createdAt"] = {
      $gt: filters.start_date,
      $lt: filters.end_date,
    };
  }
  if (filters.status) filterObject["status"] = filters.status;
  return PostModel.find(filterObject);
}

export async function createPostService(userId, post) {
  // Create post and link user to post
  // Add post to the array of posts in the user document
  try {
    const createPost = await PostModel.create({
      ...post,
      user: userId,
    });
    const user = await UserModel.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $push: {
          posts: [createPost._id],
        },
      },
      {
        new: true, // return the updated document after update
      }
    );
    console.log(user, post);
    return {
      user,
      createPost,
    };
  } catch (error) {
    throw error;
  }
}

export function deletePostService(postId) {
  return PostModel.findByIdAndDelete(postId);
}

export function updatePostScheduleService(postId, date) {
  return PostModel.findByIdAndUpdate(postId, {
    scheduledAt: new Date(date),
    status: POST_STATUS_SCHEDULED,
  });
}

export function getPostByIdService(postId) {
  return PostModel.findById(postId);
}

export function sharePostService(postId) {
  return PostModel.findByIdAndUpdate(postId, {
    scheduledAt: null,
    status: POST_STATUS_SENT,
  });
}
