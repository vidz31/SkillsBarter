import exchangePreferenceModel from "../models/exchangePreferenceModel.js";
import mongoose from "mongoose";

// Get exchange preferences
const getPreferences = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId))
      return res.json({ success: false, message: "Invalid userId" });
    const prefs = await exchangePreferenceModel.findOne({ user: userId });
    res.json({ success: true, preferences: prefs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Update exchange preferences
const updatePreferences = async (req, res) => {
  try {
    const { userId } = req.params;
    const { allowGlobal, preferredLanguages, timeZone } = req.body;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId))
      return res.json({ success: false, message: "Invalid userId" });
    if (typeof allowGlobal !== "boolean")
      return res.json({
        success: false,
        message: "allowGlobal must be boolean",
      });
    if (!Array.isArray(preferredLanguages))
      return res.json({
        success: false,
        message: "preferredLanguages must be array",
      });
    if (timeZone && typeof timeZone !== "string")
      return res.json({ success: false, message: "Invalid timeZone" });
    const prefs = await exchangePreferenceModel.findOneAndUpdate(
      { user: userId },
      { allowGlobal, preferredLanguages, timeZone },
      { new: true, upsert: true }
    );
    res.json({ success: true, preferences: prefs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { getPreferences, updatePreferences };
