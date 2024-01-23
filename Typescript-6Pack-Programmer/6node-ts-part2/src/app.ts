import express from "express";
import userRoute from "./routers/user.js";

const app = express();

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("worked");
});

app.listen(4000, () => {
  console.log("Serevr is up and running on port 4000");
});
