import express from 'express';
import auth from '../middlewares/auth.js';
import * as profileController from '../controllers/profileController.js';

const router = express.Router();
// Get profile by user ID
router.get('/:userId', auth, profileController.getProfile);
// Update profile by user ID
router.put('/:userId', auth, profileController.updateProfile);
// Create profile for a new user
router.post('/', auth, profileController.createProfile);

export default router;
