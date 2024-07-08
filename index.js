import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./route/auth.route.js";

dotenv.config();
const PORT = process.env.PORT;
const mongoString = process.env.CONNECTION_STRING;

const app = express();
mongoose.connect(mongoString);
const database = mongoose.connection;

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