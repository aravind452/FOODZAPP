import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aravind:8aee4838f@cluster0.gkpbrio.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("database connected!");
    });
};
