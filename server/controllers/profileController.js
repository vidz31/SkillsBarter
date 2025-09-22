
import Profile from '../models/profileModel.js';
import User from '../models/userModel.js';
import Skill from '../models/skillModel.js';
import Badge from '../models/badgeModel.js';
import Review from '../models/reviewModel.js';

// Get profile by user ID
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId })
      .populate('user', '-password')
      .populate('skillsOffered')
      .populate('skillsNeeded')
      .populate('badges')
      .populate({ path: 'reviews', populate: { path: 'reviewer', select: 'name profileImage' } });
    if (!profile) return res.status(404).json({ success: false, message: 'Profile not found' });
    res.json({ success: true, profile });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update profile by user ID
export const updateProfile = async (req, res) => {
  try {
    const update = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: req.params.userId },
      update,
      { new: true, runValidators: true }
    );
    if (!profile) return res.status(404).json({ success: false, message: 'Profile not found' });
    res.json({ success: true, profile });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Create profile for a new user
export const createProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    const profile = new Profile({ user: userId });
    await profile.save();
    res.status(201).json({ success: true, profile });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
