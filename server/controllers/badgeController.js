import badgeModel from "../models/badgeModel.js";

// Create a new badge
const createBadge = async (req, res) => {
  try {
    const { name, icon, description } = req.body;
    if (!name || typeof name !== 'string') return res.json({ success: false, message: "Badge name required" });
    if (icon && typeof icon !== 'string') return res.json({ success: false, message: "Invalid icon" });
    if (description && typeof description !== 'string') return res.json({ success: false, message: "Invalid description" });

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