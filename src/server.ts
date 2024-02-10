import express from "express";
import router from "./router";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));
app.get("/", (req, res) => {
  console.log("first backend App created");
  res.status(200);
  res.json({ message: "hello" });
});

export default app;

app.use("/api", router);
