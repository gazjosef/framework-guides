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
router.delete("/:id", async (req, res) => {
  try {
    await Tip.findByIdAndDelete(req.params.id);
    res.status(200).json("Tip has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET
router.get("/:id", async (req, res) => {
  try {
    const tip = await Tip.find(req.params.id);
    res.status(200).json(tip);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL
router.get("/", async (req, res) => {
  try {
    const tips = await Tip.find(req.params.id);
    res.status(200).json(tips);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
