import { Router } from "express";
import { genreController } from "../controllers/genre.controller.js";

export const genreRoutes = Router();

genreRoutes.get('/', genreController.list);
genreRoutes.get('/genre', genreController.listGenre);