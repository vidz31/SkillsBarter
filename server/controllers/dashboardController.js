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

    // Suggested matches: all real users except self (no random sampling, no static data)
    const matches = await User.find({ _id: { $ne: user._id } })
      .select('name skillsOffered skillsNeeded bio profileImage');

    // Sanitize external placeholder avatars that may be blocked by the browser
    const sanitizedMatches = matches.map(m => {
      try {
        if (m.profileImage) {
          const url = new URL(m.profileImage);
          if (url.hostname === 'example.com') {
            m.profileImage = '';
          }
        }
      } catch (e) {
        // Not a valid URL; leave as-is
      }
      return m;
    });

    res.json({
      success: true,
      user,
      wallet,
      notifications,
      credibility,
      matches: sanitizedMatches
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Dashboard fetch error", error: error.message });
  }
};
