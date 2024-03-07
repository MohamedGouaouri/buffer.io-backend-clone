import express from "express";
import postsRouter from "./routers/posts.router.js";
import tagsRouter from "./routers/tags.router.js";
import userRouter from "./routers/user.router.js";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(express.json());
const port = 3000;

app.use("/posts", postsRouter);
app.use("/tags", tagsRouter);
app.use("/users", userRouter);

app.listen(port, async () => {
  console.log(`App started on port ${port}`);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database connected");
});
