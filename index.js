import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./route/auth.route.js";
import connectDB from "./config/db.config.js";
import { userRouter } from "./route/user.route.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
connectDB();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);

database.on("connect", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database connected");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
