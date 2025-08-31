import mongoose from "mongoose";

const badgeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String }, // path or URL
  description: { type: String }
});

const badgeModel = mongoose.models.Badge || mongoose.model("Badge", badgeSchema);
export default badgeModel;