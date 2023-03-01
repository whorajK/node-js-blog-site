const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// collection for blogs (Schema) - defines the structure
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// model - interface to communicate
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
