import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    name: {
      type: String,
    },
  },
  status: {
    type: String,
  },
  image: {
    type: String,
  },
  edited: [
    {
      author_id: {
        type: String,
      },
      author: {
        type: String,
      },
      date: {
        type: Date,
      },
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  tags: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
