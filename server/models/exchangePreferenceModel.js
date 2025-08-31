import mongoose from "mongoose";

const exchangePreferenceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  allowGlobal: { type: Boolean, default: false },
  preferredLanguages: [String],
  timeZone: { type: String }
});

const exchangePreferenceModel = mongoose.models.ExchangePreference || mongoose.model("ExchangePreference", exchangePreferenceSchema);
export default exchangePreferenceModel;