import express from "express";
import { getDashboardData } from "../controllers/dashboardController.js";
import userAuth from "../middlewares/auth.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/:userId", userAuth, getDashboardData);

export default dashboardRouter;
