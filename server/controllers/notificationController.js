import notificationModel from "../models/notificationModel.js";
import mongoose from "mongoose";

// Get notifications for a user
const getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) return res.json({ success: false, message: "Invalid userId" });
    const notifications = await notificationModel.find({ user: userId });
    res.json({ success: true, notifications });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Mark notification as read
const markAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;
    if (!notificationId || !mongoose.Types.ObjectId.isValid(notificationId)) return res.json({ success: false, message: "Invalid notificationId" });
    await notificationModel.findByIdAndUpdate(notificationId, { read: true });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { getUserNotifications, markAsRead };