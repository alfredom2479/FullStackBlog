import asyncHandler from "express-async-handler";
import Comment from "../models/commentModel";

// @desc      Get all comments for a post
// @route     GET /api/comments/:postid
// @access    Public
const getComments = (req,res) => {
  res.status(404);
  res.json({
    comment: "Under Construction"
  });
};

//const createComment