import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
  type: { type: String } // e.g., "match", "review", "system"
});

const notificationModel = mongoose.models.Notification || mongoose.model("Notification", notificationSchema);
export default notificationModel;