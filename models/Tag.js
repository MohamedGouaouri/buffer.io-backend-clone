import mongoose from "mongoose";

let TagSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
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

export const TagModel = mongoose.model("Tag", TagSchema, "Tags");
