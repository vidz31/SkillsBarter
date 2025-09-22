    import express from 'express';
    import { getWallet, addTransaction } from '../controllers/walletController.js';
    import userAuth from '../middlewares/auth.js';

    const walletRouter = express.Router();

    walletRouter.get("/:userId", userAuth, getWallet);
    walletRouter.post("/transaction", userAuth, addTransaction);

    export default walletRouter;