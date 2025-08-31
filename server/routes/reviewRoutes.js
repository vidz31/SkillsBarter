import express from 'express';
import { addReview, getUserReviews } from '../controllers/reviewController.js';
import userAuth from '../middlewares/auth.js';

const reviewRouter = express.Router();

reviewRouter.post("/add", userAuth, addReview);
reviewRouter.get("/user/:userId", getUserReviews);

export default reviewRouter;