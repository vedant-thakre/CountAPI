import express from "express";
import { createNewCounter, increaseCount, resetCounter } from "./countController.js";

const router = express.Router();

// Route to create a new counter
router.post("/create", createNewCounter);

// Route to increase the count
router.put("/increase", increaseCount);

// Route to reset the counter using query parameters
router.put("/reset", resetCounter);

export default router;
