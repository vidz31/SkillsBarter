import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String }, // Beginner, Intermediate, Expert
  description: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const skillModel = mongoose.models.Skill || mongoose.model("Skill", skillSchema);
export default skillModel;