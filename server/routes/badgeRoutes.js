import express from 'express';
import { createBadge, getAllBadges } from '../controllers/badgeController.js';
import userAuth from '../middlewares/auth.js';

const badgeRouter = express.Router();

badgeRouter.post("/create", userAuth, createBadge);
badgeRouter.get("/all", getAllBadges);

export default badgeRouter;