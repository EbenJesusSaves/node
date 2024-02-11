import * as dotenv from "dotenv";
dotenv.config();
import app from "./server";
// const app = server;

app.listen(3001, () => {
  console.log("hii");
});
