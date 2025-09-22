import reviewModel from "../models/reviewModel.js";
import mongoose from "mongoose";

// Add a review
const addReview = async (req, res) => {
  try {
    const { reviewer, reviewee, rating, comment } = req.body;
    if (!reviewer || !mongoose.Types.ObjectId.isValid(reviewer)) return res.json({ success: false, message: "Invalid reviewer id" });
    if (!reviewee || !mongoose.Types.ObjectId.isValid(reviewee)) return res.json({ success: false, message: "Invalid reviewee id" });
    if (!rating || typeof rating !== 'number' || rating < 1 || rating > 5) return res.json({ success: false, message: "Rating must be 1-5" });
    if (comment && typeof comment !== 'string') return res.json({ success: false, message: "Invalid comment" });

    const review = await reviewModel.create({ reviewer, reviewee, rating, comment });
    res.json({ success: true, review });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get reviews for a user
const getUserReviews = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) return res.json({ success: false, message: "Invalid userId" });
    const reviews = await reviewModel.find({ reviewee: userId }).populate("reviewer", "name profileImage");
    res.json({ success: true, reviews });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addReview, getUserReviews };