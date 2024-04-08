import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
});

export const CategoryModel = mongoose.model("category", categorySchema);
