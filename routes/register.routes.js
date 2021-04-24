import { Router } from "express";
import { registerController } from "../controllers/register.controller.js";

export const registerRoutes = Router();

registerRoutes.post('/', registerController.create)