import skillModel from "../models/skillModel.js";
import mongoose from "mongoose";

// Add a new skill
const addSkill = async (req, res) => {
  try {
    const { name, level, description, owner } = req.body;
    if (!name || typeof name !== 'string') return res.json({ success: false, message: "Skill name required" });
    if (level && !["Beginner", "Intermediate", "Expert"].includes(level)) return res.json({ success: false, message: "Invalid skill level" });
    if (!owner || !mongoose.Types.ObjectId.isValid(owner)) return res.json({ success: false, message: "Invalid owner id" });

    const skill = await skillModel.create({ name, level, description, owner });
    res.json({ success: true, skill });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all skills for a user
const getUserSkills = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) return res.json({ success: false, message: "Invalid userId" });
    const skills = await skillModel.find({ owner: userId });
    res.json({ success: true, skills });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addSkill, getUserSkills };