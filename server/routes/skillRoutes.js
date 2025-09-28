import express from 'express';
import { addSkill, addNeededSkill, getUserSkills, getExploreSkills, getAllSkills, getFeaturedSkills } from '../controllers/skillController.js';
import userAuth from '../middlewares/auth.js';

const skillRouter = express.Router();


// Explore skills endpoint
skillRouter.get('/explore', getExploreSkills);

// All skills endpoint
skillRouter.get('/all', getAllSkills);

// Featured skills endpoint
skillRouter.get('/featured', getFeaturedSkills);

skillRouter.post("/add", userAuth, addSkill);
// Add needed skill
skillRouter.post("/add-needed", userAuth, addNeededSkill);
skillRouter.get("/user/:userId", userAuth, getUserSkills);

export default skillRouter;