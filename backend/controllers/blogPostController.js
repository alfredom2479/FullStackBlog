import asyncHandler from "express-async-handler";

import BlogPost from "../models/postModel";

// @desc        Get blog post information + content
// @route       GET /api/posts/
// @access      Public

const getBlogPost = (req,res) => {
  res.status(404);
  res.json({
    message: "under construction"
  });
};

// @desc      Create a new blog post
// @route     POST /api/posts/
// @access    Private
const createBlogPost = (req,res) =>{
  res.status(404);
  res.json({
    message: "under construction"
  });
};

// @desc      Update blog post
// @route     PUT /api/posts/:id
// @access    Private
const updaeteBlogPost = (req,res) => {
  res.status(404);
  res.json({
    message: "Under Construction"
  });
};

// @desc      Delete blog post
// @route     DELETE /api/posts/:id
// @access    Private
const deleteBlogPost = (req,res) => {
  res.status(404);
  res.json({
    message: "Under Construction"
  });
}

export {getBlogPost, createBlogPost,updaeteBlogPost,deleteBlogPost};