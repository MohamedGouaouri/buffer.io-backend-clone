import mongoose from "mongoose";

let PostChannelSchema = new mongoose.Schema({
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Channel",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

export const PostChannelModel = mongoose.model(
  "PostChannel",
  PostChannelSchema,
  "PostChannels"
);
