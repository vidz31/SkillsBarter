import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

function isValidEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password, profileImage, bio, location } = req.body;
    console.log("[REGISTER] Incoming data:", req.body);

    if (!name || !email || !password) {
      console.log("[REGISTER] Missing required fields");
      return res.json({ success: false, message: 'Missing Details' });
    }
    if (!isValidEmail(email)) {
      console.log("[REGISTER] Invalid email format:", email);
      return res.json({ success: false, message: 'Invalid email format' });
    }
    if (password.length < 6) {
      console.log("[REGISTER] Password too short");
      return res.json({ success: false, message: 'Password must be at least 6 characters' });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      console.log("[REGISTER] User already exists:", email);
      return res.json({ success: false, message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
      profileImage,
      bio,
      location
    };
    console.log("[REGISTER] Creating user with data:", userData);

    const newUser = new userModel(userData);
    const user = await newUser.save();
    console.log("[REGISTER] User saved:", user._id);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        bio: user.bio,
        location: user.location
      }
    });
  } catch (error) {
    console.log("[REGISTER] Error:", error);
    res.json({ success: false, message: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ success: false, message: 'Missing Details' });
    }
    if (!isValidEmail(email)) {
      return res.json({ success: false, message: 'Invalid email format' });
    }
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({
        success: true,
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          profileImage: user.profileImage,
          bio: user.bio,
          location: user.location
        }
      });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get user profile by ID
const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId || userId.length !== 24) {
      return res.json({ success: false, message: "Invalid userId" });
    }
    const user = await userModel.findById(userId)
      .select('-password')
      .populate('badges')
      .populate('reviews')
      .populate('skillsOffered')
      .populate('skillsNeeded')
      .populate('notifications');

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // Sanitize blocked placeholder avatars
    try {
      if (user.profileImage) {
        const url = new URL(user.profileImage);
        if (url.hostname === 'example.com') {
          user.profileImage = '';
        }
      }
    } catch (e) { /* ignore invalid URLs */ }

    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
  const { userId } = req.params;
  const { name, profileImage, bio, location, about, socialLinks } = req.body;
    if (!userId || userId.length !== 24) {
      return res.json({ success: false, message: "Invalid userId" });
    }

    if (name && typeof name !== 'string') {
      return res.json({ success: false, message: "Invalid name" });
    }
    if (profileImage && typeof profileImage !== 'string') {
      return res.json({ success: false, message: "Invalid profileImage" });
    }
    if (bio && typeof bio !== 'string') {
      return res.json({ success: false, message: "Invalid bio" });
    }
    if (location && typeof location !== 'string') {
      return res.json({ success: false, message: "Invalid location" });
    }
    if (about && typeof about !== 'string') {
      return res.json({ success: false, message: "Invalid about" });
    }
    if (socialLinks && typeof socialLinks !== 'object') {
      return res.json({ success: false, message: "Invalid socialLinks" });
    }

    const updateFields = { };
    if (name !== undefined) updateFields.name = name;
    if (profileImage !== undefined) updateFields.profileImage = profileImage;
    if (bio !== undefined) updateFields.bio = bio;
    if (location !== undefined) updateFields.location = location;
    if (about !== undefined) updateFields.about = about;
    if (socialLinks !== undefined) updateFields.socialLinks = socialLinks;

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      updateFields,
      { new: true }
    ).select("-password");

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { registerUser, loginUser, getUserProfile, updateUserProfile };