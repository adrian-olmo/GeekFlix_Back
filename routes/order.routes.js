import { Router } from "express";
import { orderController } from "../controllers/order.controller.js";

export const orderRoutes = Router();

orderRoutes.get('/', orderController.list);
orderRoutes.get('/order', orderController.listOrder);
orderRoutes.get('/userOrder', orderController.listUserOrder);