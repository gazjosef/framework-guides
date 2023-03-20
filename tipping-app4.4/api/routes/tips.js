import express from "express";
import Tip from "../models/Tip.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newTip = new Tip(req.body);

  try {
    const savedTip = await newTip.save();
    res.status(200).json(savedTip);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedTip = await Tip.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedTip);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE
// GET

export default router;
