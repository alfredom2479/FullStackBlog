import {Router} from "express"
const router = Router(0)

import {
  createBlogPost,
  getBlogPost,
  updaeteBlogPost,
  deleteBlogPost
} from "../controllers/blogPostController.js"

router.post("/",createBlogPost);
router.route("/:id")
  .get(getBlogPost)
  .put(updaeteBlogPost)
  .delete(deleteBlogPost)

export default router;