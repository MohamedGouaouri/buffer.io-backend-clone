import { FACEBOOK_CHANNEL } from "./channels.service"

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

export function getPostsService(filters) {
    /**
     * An example of a filter
     * filters: {
     *  status: 'sent' | 'draft', 'scheduled',
     *  start_date: '',
     *  end_date: '',
     * }
     * 
     */
    // If no filter is applied than return everything
    if (!filters.status && !filters.start_date && !filters.end_date) return postsDB;

    const posts = postsDB.filter((post) => {
        // Apply filters
        const postIncluded = false
        switch (filters.status) {
            case POST_STATUS_SENT:
                postIncluded = post.sent_date != null
                break;
            case POST_STATUS_SCHEDULED:
                postIncluded = post.sent_date == null;
                break;
            case POST_STATUS_DRAFT:
                postIncluded = post.is_draft
                break;
        }

        if (filters.start_date && filters.end_date) {
            const start_date = new Date(filters.start_date).getTime()
            const end_date = new Date(filters.end_date).getTime()
            const schedule_date = post.schedule_date.getTime()
            if (schedule_date >= start_date && schedule_date <= end_date) {
                postIncluded = true
            }
        }
        return postIncluded
    })
    console.log(posts)
    return posts
}

export function createPostService(post) {
    lastPostId++
    postsDB.push({
        ...post,
        postId: lastPostId,
        schedule_date: new Date(post.schedule_date) // Transform the date string to date object
    })
    return post
}

export function deletePostService(postId) {
    // TODO: Implement delete post by its id
}