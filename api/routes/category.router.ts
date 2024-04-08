const express = require("express");

const {
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controller/category.controller");

const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:_id", updateCategory);
categoryRouter.delete("/:_id", deleteCategory);

export default categoryRouter;
