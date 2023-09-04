import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    require: [true, "Please add the writer of post"],
    ref: 'User'
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

export default mongoose.model("Post", postSchema);