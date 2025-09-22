import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  bio: { type: String, default: '' },
  location: { type: String, default: '' },
  about: { type: String, default: '' },
  profileImage: { type: String, default: '' },
  socialLinks: {
    linkedin: { type: String, default: '' },
    twitter: { type: String, default: '' },
    website: { type: String, default: '' },
    github: { type: String, default: '' }
  },
  skillsOffered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  skillsNeeded: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  credibility: { type: Number, default: 0 }
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;







///edit profile is not dea and check proifle contents and verything