import { createPostService, getPostsService } from "../services/posts.service";

export function getPostsController(filters) {
    // TODO: Validate filters

    const posts = getPostsService(filters);
    return {
        status: 'success',
        error: null,
        data: posts
    }
}

export function createPostController(post) {
    const createdPost = createPostService(post)
    return {
        status: 'success',
        error: null,
        data: createdPost,
    }
}

export function deletePostController(postId) {

}