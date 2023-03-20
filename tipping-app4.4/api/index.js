import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// ROUTES
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import tipsRoutes from "./routes/tips.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected ❌");
});

// MIDDLEWARE
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/tips", tipsRoutes);

app.listen(8811, () => {
  connect();
  console.log("Connected to Backend");
});
