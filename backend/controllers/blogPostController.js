import asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";
import {isValidObjectId} from "mongoose"

import BlogPost from "../models/postModel.js";

// @desc      Create a new blog post
// @route     POST /api/posts/
// @access    Private
const createBlogPost = [
  body("author")
    .exists().withMessage("author field is missing")
    .trim().notEmpty().withMessage("Author is required")
    .custom((value)=>{
      if(!isValidObjectId(value)){
        throw new Error("Not valid author Id")
      }
      return true;
    }),
  body("title")
    .exists().withMessage("Title field is missing")
    .trim().notEmpty().withMessage("Title is required")
    .isLength({min:2,max:100}).withMessage("Title is too short or too long")
    .escape(),
  body("content")
    .exists().withMessage("content field is missing")
    .trim().notEmpty().withMessage("Content is required")
    .isLength({min:20,max:3000}).withMessage("Content is too short or too long")
    .escape(),
  
  asyncHandler(async(req,res) =>{
    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()){
      res.status(400);

      let errorsArray = validationErrors.array();
      let outputErrorString = "";

      for(let i = 0; i < errorsArray.length; i++){
        outputErrorString = outputErrorString.concat("; ", errorsArray[i].msg);
      }
      throw new Error(outputErrorString);
    }

    const {author, title, content} = req.body;

    const blogPost = await BlogPost.create({
      author,
      title,
      content,
      isprivate:true
    });

    if(blogPost){
      res.status(201).json({
        _id: blogPost.id,
        author: blogPost.author,
        title: blogPost.title,
        content: blogPost.content,
        isprivate: blogPost.isprivate
      })
    }

  })
]

// @desc        Get blog post information + content
// @route       GET /api/posts/
// @access      Public
const getBlogPost = (req,res) => {
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