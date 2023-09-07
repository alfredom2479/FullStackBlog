import asyncHandler from 'express-async-handler';

import User from "../models/userModel.js";
import { body, validationResult } from 'express-validator';
import generateToken from '../utils/generateToken.js';


// @desc      Get user information
// @route     POST /api/users
// @access    Public
const createUser = [
  body("username")
    .exists().withMessage("Username field is missing")
    .trim().notEmpty().withMessage("Username is required")
    .isLength({min:2,max:20}).withMessage("Username is too short or too long")
    .matches(/^[a-zA-Z0-9_]+$/).withMessage("Username can only contain letters, numbers, and underscores"),
  body("email")
    .exists().withMessage("Email field is missing")
    .trim().notEmpty().withMessage("Email is required")
    .isLength({min: 4, max:320}).withMessage("Email is too short or too long")
    .isEmail().withMessage("Please provide a valid email address"),
  body("password")
    .exists().withMessage("Password field is missing")
    .trim().notEmpty().withMessage("Password is required")
    .matches(/\d/).withMessage("Password must contain at least 1 number")
    .matches(/[a-z]/).withMessage("Password must contain at least 1 lowercase letter")
    .matches(/[A-z]/).withMessage("Password must contain at least 1 uppercase letter")
    .matches(/[\W_]/).withMessage("Password must contain at least one special character"),
  body("confirm_password")
    .exists().withMessage("Confirm password field is missing")
    .notEmpty().withMessage("Confirm password is required")
    .custom((value,{req})=>{
      if(value != req.body.password){
        throw new Error("Passwords do not match");
      }
      return true
    }),

    asyncHandler(async (req,res,next) =>{
      const validationErrors = validationResult(req);

      if(!validationErrors.isEmpty()){
        res.status(400);

        let errorsArray = validationErrors.array()
        //console.log(errorsArray)
        let outputErrorString = "";
        

        for(let i = 0; i < errorsArray.length; i++){
          //console.log(errorsArray[i]);
          outputErrorString =  outputErrorString.concat("; " ,errorsArray[i].msg);
        }
        //need to figure out how to include the validation errors to user
        throw new Error(outputErrorString);
      }

      const {username, email, password} = req.body;

      const userExists = await User.findOne({email});

      if(userExists){
        res.status(400);
        throw new Error("User already exists");
      }

      const user = await User.create({
        username,
        email,
        password,
        isadmin: false
      });

      if (user){
        generateToken(res, user._id);

        res.status(201).json({
          _id: user.id,
          username: user.username,
          email: user.email
        });
      }
      else{
        res.status(400);
        throw new Error("Invalid user data")
      }
    })
]

// @desc      Authenticates user
// @route     POST /api/users/login
// @access    Public
const loginUser = asyncHandler(async(req,res) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if(user && (await user.matchPassword(password))){
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.username,
      email: user.email
    });
  }
  else{
    res.status(401);
    throw new Error("invalid email or password");
  }
});

// @desc      Log out user
// @route     POST /api/users/logout
// @access    Private
const logoutUser = (req,res) => {
  res.status(404);
  res.json({
    message: "under construction"
  })
}

// @desc      Gets current user information
// @route     GET /api/users/me
// @access    Private
const getMe = (req,res) => {
  res.status(404);
  res.json({
    message: "under construction"
  })
}

export {createUser, loginUser,logoutUser, getMe};