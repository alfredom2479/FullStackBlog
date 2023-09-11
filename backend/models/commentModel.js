import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    require: [true, "Please add the user who wrote the comment"],
    ref: 'User'
  },
  blogpost:{
    type: mongoose.Schema.Types.ObjectId,
    require: [true, "Please add the corresponding post"],
    ref: "Post"
  },
  content: {
    type: String,
    require: [true, "Please add the comment text"]
  }
},{
  timestamps: true
});

export default mongoose.model("Comment", commentSchema);