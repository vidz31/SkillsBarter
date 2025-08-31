import reviewModel from "../models/reviewModel.js";

// Add a review
const addReview = async (req, res) => {
  try {
    const { reviewer, reviewee, rating, comment } = req.body;
    if (!reviewer || !reviewee || !rating) return res.json({ success: false, message: "Missing details" });

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
    const reviews = await reviewModel.find({ reviewee: userId }).populate("reviewer", "name profileImage");
    res.json({ success: true, reviews });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addReview, getUserReviews };