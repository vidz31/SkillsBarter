import barterRequestModel from "../models/barterRequestModel.js";
import userModel from "../models/userModel.js";
import skillModel from "../models/skillModel.js";
import notificationModel from "../models/notificationModel.js";
import { sendEmail } from "../utils/email.js";

// Request a barter
export const requestBarter = async (req, res) => {
  try {
    const { skillId, message } = req.body;
    const requesterId = req.user._id;
    const skill = await skillModel.findById(skillId).populate("owner");
    if (!skill) return res.status(404).json({ success: false, message: "Skill not found" });
    if (String(skill.owner._id) === String(requesterId)) return res.status(400).json({ success: false, message: "You cannot request your own skill" });

    // Create barter request
    const barter = await barterRequestModel.create({
      skill: skillId,
      requester: requesterId,
      owner: skill.owner._id,
      message
    });

    // Send email to skill owner
    const ownerUser = skill.owner;
    const requesterUser = await userModel.findById(requesterId);
    const subject = `Barter Request: ${requesterUser.name} wants to barter for ${skill.name}`;
    const html = `<p>Hello ${ownerUser.name},</p>
      <p><b>${requesterUser.name}</b> is requesting to barter for your skill: <b>${skill.name}</b>.</p>
      <p>Message: ${message || "No message provided."}</p>
      <p>Contact: ${requesterUser.email}</p>
      <p>Login to SkillBarter to accept or reject this request.</p>`;
    await sendEmail({ to: ownerUser.email, subject, html });

    // Create notification for skill owner
    const notificationMsg = `${requesterUser.name} is requesting your skill "${skill.name}" (offered) in exchange for their needed skills.`;
    await notificationModel.create({
      user: ownerUser._id,
      message: notificationMsg,
      type: "barter-request"
    });

    res.json({ success: true, barter });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all barter requests for a user (as requester or owner)
export const getUserBarterRequests = async (req, res) => {
  try {
    const userId = req.user._id;
    const requests = await barterRequestModel.find({
      $or: [
        { requester: userId },
        { owner: userId }
      ]
    }).populate("skill requester owner").sort({ createdAt: -1 });
    res.json({ success: true, requests });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
