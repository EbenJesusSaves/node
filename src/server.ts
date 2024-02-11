import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";
import { createUser, singIn } from "./handlers/user";
const app = express();

// ----------------middlewares-----------//
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("first backend App created");
  res.status(200);
  res.json({ message: "hello" });
});

export default app;

app.use("/api", protect, router);
app.post("/user", createUser);
app.post("/signIn", singIn);
