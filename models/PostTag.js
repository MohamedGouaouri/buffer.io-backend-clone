import mongoose from "mongoose";

let PostTagSchema = new mongoose.Schema({
  tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

export const PostTagModel = mongoose.model(
  "PostTag",
  PostTagSchema,
  "PostTags"
);
