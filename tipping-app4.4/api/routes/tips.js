import express from "express";
import {
  createTip,
  deleteTip,
  getAllTips,
  getTip,
  updateTip,
} from "../controllers/tip.js";

import { createError } from "../utils/error.js";

const router = express.Router();

// CREATE
router.post("/", createTip);

// UPDATE
router.put("/:id", updateTip);

// DELETE
router.delete("/:id", deleteTip);

// GET
router.get("/:id", getTip);

// GET ALL
router.get("/", getAllTips);

export default router;
