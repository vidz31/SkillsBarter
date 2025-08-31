import express from 'express';
import { getUserNotifications, markAsRead } from '../controllers/notificationController.js';
import userAuth from '../middlewares/auth.js';

const notificationRouter = express.Router();

notificationRouter.get("/user/:userId", userAuth, getUserNotifications);
notificationRouter.put("/read/:notificationId", userAuth, markAsRead);

export default notificationRouter;