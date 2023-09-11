import asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";

import Comment from "../models/commentModel.js";
//import User from "../models/userModel.js";
import BlogPost from "../models/postModel.js";

import { isValidObjectId } from "mongoose";

// @desc      Get all comments for a post
// @route     GET /api/comments/p/:postid
// @access    Public
const getComments = asyncHandler(async (req,res)=>{
  const targetBlogPost = await BlogPost.findById(req.params.id);

  if(targetBlogPost && !targetBlogPost.isprivate){
    const comments = await Comment.find({blogpost:req.params.id})
      .populate("author","username -_id").select(["-_id","createdAt","content"]);
    //console.log(comments);
    if(comments){
    res.status(200).json({comments});
    }
    else{
      res.status(200).json({comments: []});
    }
  }
  else{
    res.status(404);
    throw new Error("Blog Post not found");
  }
})

// @desc      Create a new comment
// @route     POST /api/comments/
// @access    Private
const createComment = [
  body("blogpost")
    .trim().notEmpty().withMessage("Blog post is required")
    .custom((value)=>{
      if(!isValidObjectId(value)){
        throw new Error("Not valid blog post id");
      }
      return true
    }),
  body("content")
    .trim().notEmpty().withMessage("Comment is required")
    .isLength({min: 1,max:400}).withMessage("Comment is too short or too long")
    .escape(),

  asyncHandler(async (req,res)=>{
    const validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()){
      res.status(400);
      let errorsArray = validationErrors.array();
      let outputErrorString = "";

      for(let i = 0; i < errorsArray.length; i++){
        outputErrorString = outputErrorString.concat(errorsArray[i].msg,";");
      }
      throw new Error(outputErrorString);
    }
    const targetBlogpost = await BlogPost.findById(req.body.blogpost);

    if(targetBlogpost && !targetBlogpost.isprivate){
      const newComment = await Comment.create({
        author: req.user._id,
        blogpost: targetBlogpost._id,
        content: req.body.content
      });

      if(newComment){
        res.status(201).json({
          _id: newComment._id,
          blogpost: newComment.blogpost,
          author: newComment.author,
          content: newComment.content
        })
      }
      else{
        res.status(400);
        throw new Error("Invalid comment data")
      }
    }
    else{
      res.status(404);
      throw new Error("Blog Post not found")
    }
  })
]

// @desc      delete a comment
// @route     DELETE /api/comments/:id
// @access    Private
const deleteComment = asyncHandler(async(req,res) => {
  const targetComment = await Comment.findById(req.params.id);

  if(targetComment && targetComment.author.toString() === req.user._id.toString()){
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);

    res.status(200).json({deletedComment});
  }
  else{
    res.status(404);
    throw new Error("Comment not found")
  }
});

//MAYBE add an update comment

export {getComments, createComment, deleteComment}