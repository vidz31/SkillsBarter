import exchangePreferenceModel from "../models/exchangePreferenceModel.js";

// Get exchange preferences
const getPreferences = async (req, res) => {
  try {
    const { userId } = req.params;
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