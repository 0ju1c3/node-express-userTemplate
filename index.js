import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./route/auth.route.js";
import connectDB from "./config/db.config.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
connectDB();

app.use(express.json());
app.use("/auth", authRouter);

database.on("connect", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database connected");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
