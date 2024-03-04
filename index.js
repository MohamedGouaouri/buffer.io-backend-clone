import express from "express";
import postsRouter from "./routers/posts.router.js";
import tagsRouter from "./routers/tags.router.js";
import userRouter from "./routers/user.router.js";
const app = express();

app.use(express.json());
const port = 3000;

app.use("/posts", postsRouter);
app.use("/tags", tagsRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
