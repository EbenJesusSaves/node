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
//error handling

app.use((err, req, res, next) => {
  console.log(err);
  if (err.type === "auth") {
    res.status(4001).json({ message: "screw you, you do not have access " });
  } else if (err.type === "input") {
    res.status(400).json({ message: "kwame be careful" });
  } else {
    res.status(500).json({ message: "Go figure it out dude" });
  }
});
