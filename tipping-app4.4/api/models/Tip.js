import mongoose from "mongoose";

const TipSchema = new mongoose.Schema(
  {
    gameId: {
      type: Number,
      required: true,
      unique: true,
    },
    tipId: {
      type: Number,
      required: true,
      unique: true,
    },
    tip: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tip", TipSchema);
