import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  amount: Number,
  type: String, // "credit" or "debit"
  date: { type: Date, default: Date.now },
  description: String
});

const walletSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  credits: { type: Number, default: 0 },
  transactions: [transactionSchema]
});

const walletModel = mongoose.models.Wallet || mongoose.model("Wallet", walletSchema);
export default walletModel;