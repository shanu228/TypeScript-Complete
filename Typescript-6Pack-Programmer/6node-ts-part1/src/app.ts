import express from "express";
import { lol } from "./lol.js";

const app = express();

app.get("/", (req, res) => {
  res.send("worked");
});

app.listen(4000, () => {
  console.log(lol);
  console.log("Serevr is working on port 4000");
});
