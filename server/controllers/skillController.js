import skillModel from "../models/skillModel.js";

// Add a new skill
const addSkill = async (req, res) => {
  try {
    const { name, level, description, owner } = req.body;
    if (!name || !owner) return res.json({ success: false, message: "Missing details" });

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
    const skills = await skillModel.find({ owner: userId });
    res.json({ success: true, skills });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addSkill, getUserSkills };