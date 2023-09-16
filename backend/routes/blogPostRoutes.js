import {Router} from "express"
const router = Router(0)

import {protect, adminProtect} from "../middleware/authMiddleware.js";

import {
  createBlogPost,
  getBlogPosts,
  getBlogPost,
  updaeteBlogPost,
  deleteBlogPost
} from "../controllers/blogPostController.js"

router.route("/")
  .get(getBlogPosts)
  .post(protect,adminProtect,createBlogPost);
router.route("/:id")
  .get(getBlogPost)
  .put(protect,adminProtect,updaeteBlogPost)
  .delete(protect,adminProtect,deleteBlogPost)

export default router;