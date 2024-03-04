import express from "express";
import postsRouter from './routers/posts.router.js'
const app = express()

app.use(express.json())
const port = 3000

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`App started on port ${port}`)
})