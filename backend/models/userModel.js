import mongoose  from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a username"],
    uniqe: true
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please add a passwo"]
  },
  isauthor: {
    type: Boolean
  }
});

export default mongoose.model('User',userSchema);