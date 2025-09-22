import mongoose from "mongoose";

// Reference other schemas by ObjectId
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  profileImage: { type: String },
  bio: { type: String },
  location: { type: String },
  about: { type: String },
  socialLinks: {
    linkedin: { type: String },
    twitter: { type: String },
    website: { type: String },
    github: { type: String }
  },

  skillsOffered: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  skillsNeeded: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],

  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Badge" }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],

  wallet: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet" },

  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notification" }],

  exchangePreferences: { type: mongoose.Schema.Types.ObjectId, ref: "ExchangePreference" },

  createdAt: { type: Date, default: Date.now },
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;