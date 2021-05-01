import { Router } from "express";
import { orderController } from "../controllers/order.controller.js";
import checkUser from "../middlewares/checkUser.js";
import checkAdmin from "../middlewares/checkAdmin.js";

export const orderRoutes = Router();

orderRoutes.get('/', checkUser, checkAdmin, orderController.list);
orderRoutes.get('/order', orderController.listOrder);
orderRoutes.get('/userOrders', checkUser, orderController.listUserOrders);
orderRoutes.get('/newOrder', orderController.newOrder);
orderRoutes.get('/order/:id', checkUser, checkAdmin, orderController.cancelOrder);