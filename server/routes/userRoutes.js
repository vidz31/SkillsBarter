import express from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile/:userId", userAuth, getUserProfile);
userRouter.put("/profile/:userId", userAuth, updateUserProfile);

export default userRouter;