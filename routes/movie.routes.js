import { Router } from "express";
import { movieController } from "../controllers/movie.controller.js";

export const movieRoutes = Router();

movieRoutes.get('/', movieController.list);
movieRoutes.get('/title', movieController.listName)