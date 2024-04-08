const express = require("express");

const { getMenu, createMenu, deleteMenu } = require("../controller/menu.controller");

const menuRouter = express.Router();

menuRouter.get("/", getMenu);
menuRouter.post("/create", createMenu);

export default menuRouter;
