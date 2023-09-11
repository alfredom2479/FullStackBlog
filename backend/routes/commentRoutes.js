import { Router } from "express";
const router = Router();

import { protect } from "../middleware/authMiddleware.js";

import {
  getComments,
  createComment,
  deleteComment
} from "../controllers/commentController.js";

router.get("/p/:id",protect,getComments);
router.post("/",protect,createComment);
router.delete("/:id",protect, deleteComment);

export default router;
