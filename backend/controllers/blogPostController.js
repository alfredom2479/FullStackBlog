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
const getBlogPost = asyncHandler(async (req,res) => {
  const requestedBlogPost = await BlogPost.findById(req.params.id);
  console.log(requestedBlogPost);

  if(requestedBlogPost){
    res.status(200).json({
      _id: requestedBlogPost._id,
      author: requestedBlogPost.author,
      title: requestedBlogPost.title,
      content: requestedBlogPost.content,
      isprivate: requestedBlogPost.isprivate
    });
  }
  else{
    res.status(404);
    throw new Error("Blog post not found")
  }
});

// @desc      Update blog post
// @route     PUT /api/posts/:id
// @access    Private
const updaeteBlogPost = [
   body("author").optional()
      .trim().notEmpty().withMessage("Author is required")
      .custom((value)=>{
        if(!isValidObjectId(value)){
          throw new Error("Not valid author Id")
        }
        return true;
      }),
    body("title").optional()
      .trim().notEmpty().withMessage("Title is required")
      .isLength({min:2,max:100}).withMessage("Title is too short or too long")
      .escape(),
    body("content").optional()
      .trim().notEmpty().withMessage("Content is required")
      .isLength({min:20,max:3000}).withMessage("Content is too short or too long")
      .escape(),
    body("isprivate").optional().isBoolean().withMessage("isprivate must be a true or false"),
  
  asyncHandler(async(req,res) => {
   
  console.log(req.body);
  const validationErrors = validationResult(req);
  console.log(validationErrors.isEmpty());

  if(!validationErrors.isEmpty()){
    res.status(400);
    let errorsArray = validationErrors.array();
    let outputErrorString = "";

    for(let i =0; i < errorsArray.length; i++){
      outputErrorString = outputErrorString.concat(": ", errorsArray[i].msg);
    }
    throw new Error(outputErrorString);
  }
  const targetBlogPost = await BlogPost.findById(req.params.id);
  //console.log(targetBlogPost);

    if(targetBlogPost){
      targetBlogPost.title = req.body.title || targetBlogPost.title;
      targetBlogPost.author = req.body.author || targetBlogPost.author;
      targetBlogPost.content = req.body.content || targetBlogPost.content;
      targetBlogPost.isprivate = req.body.isprivate || targetBlogPost.isprivate;

    

      const updatedBlogPost = await targetBlogPost.save();
      //console.loge(updatedBlogPost)
      res.json({
        _id: updatedBlogPost._id,
        title: updatedBlogPost.title,
        author: updatedBlogPost.author,
        content: updatedBlogPost.content,
        isprivate: updatedBlogPost.isprivate
      });
    }
    else{
      res.status(404);
      throw new Error("Blog Post not found");
    }
})

]
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