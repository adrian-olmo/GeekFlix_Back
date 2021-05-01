import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

export const userRoutes = Router();

userRoutes.get('/', userController.list);
userRoutes.get('/email', userController.listEmail);