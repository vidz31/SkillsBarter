import badgeModel from "../models/badgeModel.js";

// Create a new badge
const createBadge = async (req, res) => {
  try {
    const { name, icon, description } = req.body;
    if (!name) return res.json({ success: false, message: "Badge name required" });

    const badge = await badgeModel.create({ name, icon, description });
    res.json({ success: true, badge });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all badges
const getAllBadges = async (req, res) => {
  try {
    const badges = await badgeModel.find();
    res.json({ success: true, badges });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { createBadge, getAllBadges };