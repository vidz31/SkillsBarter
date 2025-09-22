import walletModel from "../models/walletModel.js";
import mongoose from "mongoose";

// Get wallet info
const getWallet = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) return res.json({ success: false, message: "Invalid userId" });
    const wallet = await walletModel.findOne({ user: userId });
    res.json({ success: true, wallet });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Add a transaction
const addTransaction = async (req, res) => {
  try {
    const { userId, amount, type, description } = req.body;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) return res.json({ success: false, message: "Invalid userId" });
    if (typeof amount !== 'number' || isNaN(amount)) return res.json({ success: false, message: "Invalid amount" });
    if (!['credit', 'debit'].includes(type)) return res.json({ success: false, message: "Invalid transaction type" });
    if (description && typeof description !== 'string') return res.json({ success: false, message: "Invalid description" });
    let wallet = await walletModel.findOne({ user: userId });
    if (!wallet) {
      wallet = await walletModel.create({ user: userId, credits: 0, transactions: [] });
    }
    wallet.transactions.push({ amount, type, description });
    if (type === "credit") wallet.credits += amount;
    if (type === "debit") wallet.credits -= amount;
    await wallet.save();
    res.json({ success: true, wallet });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { getWallet, addTransaction };