import { Router } from "express";
import { orderController } from "../controllers/order.controller.js";
import checkUser from "../middlewares/checkUser.js";

export const orderRoutes = Router();

orderRoutes.get('/', orderController.list);
orderRoutes.get('/order', orderController.listOrder);
orderRoutes.get('/userOrders', checkUser, orderController.listUserOrders);
orderRoutes.get('/newOrder', orderController.newOrder);