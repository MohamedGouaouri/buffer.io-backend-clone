import express from "express";
import { createPostService } from "../services/posts.service";
import { createPostValidator } from "../middlewares/validators/posts/create-post.validator";
import { createPostController, getPostsController } from "../controllers/posts.controller";

const router = express.Router()

// List all posts
router.get('/posts', (req, res) => {
    const filters = {
        status: req.query.status,
        start_date: req.query.start_date,
        end_date: req.query.end_date,
    }
    const response = getPostsController(filters)
    if (response.status == 'success') {
        return res.status(200).json(response)
    }
    return res.status(500).json({
        message: 'An expected error'
    })
})

// Create a post
router.post('/posts/create', createPostValidator,(req, res) => {
    const data = req.body
    const createPostResponse = createPostController(data)
    if (createPostResponse.status == 'success') {
        return res.status(201).json(createPostResponse)
    }
    return res.status(500).json({
        message: 'An unexpected error'
    })
})

// Update post schedule
router.delete('/posts/:postId', (req, res) => {
    // TODO: Implement delete
})