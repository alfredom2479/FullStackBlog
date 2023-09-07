import mongoose  from "mongoose";
import bcrypt from "bcryptjs";

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
  isadmin: {
    type: Boolean
  }
});

userSchema.pre('save', async function (next) {
  if(!this.isModified("password")){
    next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}

const User =  mongoose.model('User',userSchema);

export default User;