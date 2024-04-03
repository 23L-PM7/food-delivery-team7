import mongoose from "mongoose";
import "dotenv/config";

const connectionString =
  "mongodb+srv://Amgaa:RnPHR27iH0CJj4xI@food-delivery.ppokdxp.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=food-delivery;";

console.log({ connectionString });

export const connectDB = async () => {
  try {
    mongoose.connect(connectionString);
    console.log("Connected");
  } catch (error) {
    console.log("Failed", error);
  }
};
