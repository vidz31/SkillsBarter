import express from 'express';
import { addSkill, getUserSkills } from '../controllers/skillController.js';
import userAuth from '../middlewares/auth.js';

const skillRouter = express.Router();

skillRouter.post("/add", userAuth, addSkill);
skillRouter.get("/user/:userId", userAuth, getUserSkills);

export default skillRouter;