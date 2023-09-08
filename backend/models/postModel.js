import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    require: [true, "Please add the writer of post"],
    ref: 'User'
  },
  title: {
    type: String,
    require: [true, "please add the post title"]
  },
  content: {
    type: String,
    require: [true, "Please add the post text"]
  },
  isprivate: {
    type: Boolean
  }
},{
  timestamps: true
});

const BlogPost = mongoose.model("Post",postSchema);
export default BlogPost;