import mongoose from "mongoose";
import "dotenv/config";

const connectionString = "mongodb+srv://gantogtokh0221:zcKa3mbehEtUdFCZ@food-delivery.ppokdxp.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=food-delivery"

export const connectDB = async () => {
  try {
    mongoose.connect(connectionString);
    console.log("Connected");
  } catch (error) {
    console.log("Failed", error);
  }
};
