import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    require: [true, "Please add the user who wrote the comment"],
    ref: 'User'
  },
  content: {
    type: String,
    require: [true, "Please add the comment text"]
  }
},{
  timestamps: true
});

export default mongoose.model("Comment", commentSchema);