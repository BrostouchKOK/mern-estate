import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(3000, () => {
  console.log("Server is nuning on http://localhost:3000");
});

// mv .git ../    ==>use to move git to root directory
// password: IT3
// email: IT3.Dev
