import express from 'express';
import { getPreferences, updatePreferences } from '../controllers/exchangePreferenceController.js';
import userAuth from '../middlewares/auth.js';

const exchangePreferenceRouter = express.Router();

exchangePreferenceRouter.get("/:userId", userAuth, getPreferences);
exchangePreferenceRouter.put("/:userId", userAuth, updatePreferences);

export default exchangePreferenceRouter;