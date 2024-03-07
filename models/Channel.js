import mongoose from "mongoose";

let ChannelSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  credentials: {
    type: String,
    required: true,
  },
  isConnected: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const ChannelModel = mongoose.model(
  "Channel",
  ChannelSchema,
  "Channels"
);
