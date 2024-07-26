import express from "express";
import { ProfileController } from "../controllers/auth.controller";

export const userRouter = express.Router();

userRouter.get("/:id", ProfileController);
