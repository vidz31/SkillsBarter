import skillModel from "../models/skillModel.js";
import userModel from "../models/userModel.js";
import mongoose from "mongoose";

// Add a new needed skill
const addNeededSkill = async (req, res) => {
  try {
    const { name, level, description, owner, category, status } = req.body;
    if (!name || typeof name !== 'string') return res.json({ success: false, message: "Skill name required" });
    if (level && !["Beginner", "Intermediate", "Expert"].includes(level)) return res.json({ success: false, message: "Invalid skill level" });
    if (!owner || !mongoose.Types.ObjectId.isValid(owner)) return res.json({ success: false, message: "Invalid owner id" });

    const skill = await skillModel.create({ name, level, description, owner, category, status });
    // Add skill to user's skillsNeeded array
    await userModel.findByIdAndUpdate(owner, { $push: { skillsNeeded: skill._id } });
    res.json({ success: true, skill });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Add a new skill
const addSkill = async (req, res) => {
  try {
    const { name, level, description, owner, category, status } = req.body;
    if (!name || typeof name !== 'string') return res.json({ success: false, message: "Skill name required" });
    if (level && !["Beginner", "Intermediate", "Expert"].includes(level)) return res.json({ success: false, message: "Invalid skill level" });
    if (!owner || !mongoose.Types.ObjectId.isValid(owner)) return res.json({ success: false, message: "Invalid owner id" });

    const skill = await skillModel.create({ name, level, description, owner, category, status });
    // Add skill to user's skillsOffered array
    await userModel.findByIdAndUpdate(owner, { $push: { skillsOffered: skill._id } });
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
}

// Get all skills for ExploreSkillsPage (with optional search/filter)
const getExploreSkills = async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    if (category) {
      query.category = category;
    }
    const skills = await skillModel.find(query);
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch skills', error: error.message });
  }
};

// Get all skills (no filter)
const getAllSkills = async (req, res) => {
  try {
    const skills = await skillModel.find({});
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch all skills', error: error.message });
  }
};

// Get featured skills (e.g., top 6 by some criteria, here: most recently added)
const getFeaturedSkills = async (req, res) => {
  try {
    // You can change the sort/filter logic as needed
    const skills = await skillModel.find({}).sort({ createdAt: -1 }).limit(6);
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch featured skills', error: error.message });
  }
};

export { addSkill, addNeededSkill, getUserSkills, getExploreSkills, getAllSkills, getFeaturedSkills };