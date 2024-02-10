import express from "express";
import router from "./router";

const app = express();

app.get("/", (req, res) => {
  console.log("first backend App created");
  res.status(200);
  res.json({ message: "hello" });
});

export default app;

app.use("/api", router);
