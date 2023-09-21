import {Router} from 'express';
const router = Router();

import {protect} from "../middleware/authMiddleware.js"

import { 
  createUser, 
  loginUser,
  logoutUser,
  getMe,
  loginAdmin
} from '../controllers/userController.js';

router.post("/", createUser);
router.post("/login",loginUser);
router.post("/admin",loginAdmin);
router.post("/logout",logoutUser);
router.get("/me",protect,getMe)

export default router;