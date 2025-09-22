// Dashboard controller: aggregates all dashboard data for a user

import User from "../models/userModel.js";
import walletModel from "../models/walletModel.js";
import notificationModel from "../models/notificationModel.js";
import skillModel from "../models/skillModel.js";
import reviewModel from "../models/reviewModel.js";

export const getDashboardData = async (req, res) => {
  try {
    const userId = req.params.userId;
    // Fetch user profile
    const user = await User.findById(userId)
      .select("-password")
      .populate("skillsOffered")
      .populate("skillsNeeded")
      .populate("badges")
      .populate("reviews");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Fetch wallet
    const wallet = await walletModel.findOne({ user: userId });

    // Fetch notifications (latest 10)
    const notifications = await notificationModel.find({ user: userId })
      .sort({ date: -1 })
      .limit(10);

    // Calculate credibility (average rating from reviews)
    let credibility = 0;
    if (user.reviews && user.reviews.length > 0) {
      const reviewDocs = await reviewModel.find({ _id: { $in: user.reviews } });
      const total = reviewDocs.reduce((sum, r) => sum + (r.rating || 0), 0);
      credibility = Math.round((total / reviewDocs.length) * 20); // scale to 100
    }

    // Suggested matches: users who offer what this user needs, and need what this user offers
    // (Simple version: just return 4 random users except self)
    const matches = await User.aggregate([
      { $match: { _id: { $ne: user._id } } },
      { $sample: { size: 4 } },
      { $project: { name: 1, skillsOffered: 1, skillsNeeded: 1, bio: 1, profileImage: 1 } }
    ]);

    res.json({
      success: true,
      user,
      wallet,
      notifications,
      credibility,
      matches
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Dashboard fetch error", error: error.message });
  }
};
