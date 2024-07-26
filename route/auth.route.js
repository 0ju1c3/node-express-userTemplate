import express from "express";
import {
  LoginController,
  SignUpController,
} from "../controllers/auth.controller.js";

export const authRouter = express.Router();

authRouter.post("/signup", SignUpController);
authRouter.post("/login", LoginController);
