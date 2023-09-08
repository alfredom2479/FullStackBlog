import {Router} from 'express';
const router = Router();

import protect from "../middleware/authMiddleware.js"

import { 
  createUser, 
  loginUser,
  logoutUser,
  getMe
} from '../controllers/userController.js';

router.post("/", createUser);
router.post("/login",loginUser);
router.post("/logout",logoutUser);
router.get("/me",protect,getMe)

export default router;