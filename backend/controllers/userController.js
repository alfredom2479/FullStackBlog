import asyncHandler from 'express-async-handler';

import User from "../models/userModel.js";


// @desc      Get user information
// @route     POST /api/users
// @access    Public
const createUser = (req,res) => {
  res.status(404);
  res.json({
    message: "under construction"
  })
};

// @desc      Authenticates user
// @route     POST /api/users/login
// @access    Public
const loginUser = (req,res) => {
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