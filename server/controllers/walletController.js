import walletModel from "../models/walletModel.js";

// Get wallet info
const getWallet = async (req, res) => {
  try {
    const { userId } = req.params;
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