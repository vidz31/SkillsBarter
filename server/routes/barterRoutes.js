import express from "express";
import { requestBarter, getUserBarterRequests } from "../controllers/barterController.js";
import userAuth from "../middlewares/auth.js";

const barterRouter = express.Router();

// Request a barter
barterRouter.post("/request", userAuth, requestBarter);

// Get all barter requests for the logged-in user
barterRouter.get("/my-requests", userAuth, getUserBarterRequests);

export default barterRouter;
