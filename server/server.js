import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';

import userRouter from './routes/userRoutes.js';
import skillRouter from './routes/skillRoutes.js';
import badgeRouter from './routes/badgeRoutes.js';
import reviewRouter from './routes/reviewRoutes.js';
import walletRouter from './routes/walletRoutes.js';
import notificationRouter from './routes/notificationRoutes.js';
import exchangePreferenceRouter from './routes/exchangePreferenceRoutes.js';
import dashboardRouter from './routes/dashboardRoutes.js';
import profileRouter from './routes/profileRoutes.js';
import "./models/skillModel.js";
import "./models/badgeModel.js";
import "./models/reviewModel.js";
import "./models/walletModel.js";
import "./models/notificationModel.js";
import "./models/exchangePreferenceModel.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

app.use('/api/user', userRouter);
app.use('/api/skill', skillRouter);
app.use('/api/badge', badgeRouter);
app.use('/api/review', reviewRouter);
app.use('/api/wallet', walletRouter);
app.use('/api/notification', notificationRouter);
app.use('/api/exchange-preference', exchangePreferenceRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/profile', profileRouter);

app.get('/', (req, res) => res.send("API Working"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));