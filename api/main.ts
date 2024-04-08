import express from "express";
import { connectDB } from "./database/connect";
import menuRouter  from "./routes/menu.router";

const app = express();
var cors = require("cors");
const port = 8000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/menu", menuRouter);

app.get("/", (req, res) => {
  res.send("hello team, the backend is running");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
