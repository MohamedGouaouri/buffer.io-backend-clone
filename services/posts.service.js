import { PostModel } from "../models/Post.js"
import { UserModel } from "../models/User.js"
import { FACEBOOK_CHANNEL } from "./channels.service.js"

let lastPostId = 0

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
    }
]
export const POST_STATUS_SENT = 'sent'
export const POST_STATUS_DRAFT = 'draft'
export const POST_STATUS_SCHEDULED = 'scheduled'

export function getPostsService(userId, filters) {
    /**
     * An example of a filter
     * filters: {
     *  status: 'SENT' | 'DRAFT', 'SCHEDULED',
     *  start_date: '',
     *  end_date: '',
     * }
     * 
     */
    // If no filter is applied than return everything
    // TODO: Include start and end date filter
    return PostModel.find({
        user: userId,
        status: filters.status
    })
}

export async function createPostService(userId, post) {
    // Create post and link user to post
    // Add post to the array of posts in the user document
    try {
        const createPost = await PostModel.create({
            ...post,
            user: userId
        })
        const user = await UserModel.findOneAndUpdate({
            _id: userId
        }, {
            $push: {
                posts: [createPost._id]
            }
        }, {
            new: true, // return the updated document after update
        })
        console.log(user, post)
        return {
            user,
            createPost,
        }
    } catch (error) {
        throw error
    }
}

export function deletePostService(postId) {
    // TODO: Implement delete post by its id
}