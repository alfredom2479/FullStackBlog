import asyncHandler from "express-async-handler";
import Comment from "../models/commentModel";

// @desc      Get all comments for a post
// @route     GET /api/comments/for/:postid
// @access    Public
const getComments = (req,res) => {
  res.status(404);
  res.json({
    comment: "Under Construction"
  });
};

// @desc      Create a new comment
// @route     POST /api/comments/
// @access    Private
const createComment = (req,res) => {
  res.status(404);
  res.json({
    comment: "Under Construction"
  });
};

// @desc      delete a comment
// @route     DELETE /api/comments/:id
// @access    Private
const deleteComment = (req,res) => {
  res.status(404);
  res.json({
    comment: "Under Construction"
  });
}

//MAYBE add an update comment