import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req,res,next)=>{
  let token;

  token = req.cookies.jwt;

  if(token){
    try{
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decodedToken.userId).select("-password");

      next();
    }catch(error){
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  }
  else{
    res.status(401);
    throw new Error("Not authorized, missing token");
  }
});

const adminProtect = (req,res,next) =>{
  if(req.user.isadmin){
    next();
  }
  else{
    res.status(401);
    throw new Error("Not authorized, admins only");
  }
}

export {protect, adminProtect};