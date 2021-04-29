import database from "../database.js";
import jwt from 'jsonwebtoken';
import { User } from "../models/index.js";
import { Order } from "../models/index.js";

export const orderController = {
    newOrder: async (req, res) => {

        try {

            const movieId = req.headers.movieid;
            const userData = jwt.decode(req.headers.token, process.env.SECRET);
            const user = await User.findOne({ where: { email: userData.email } });

            // Fechas de inicio y de finalización del pedido. Es automático. El pedido estándar son 3 días de préstamo.
            const rentStart = new Date();

            function addDays(date, days) {
                var result = new Date(date);
                result.setDate(result.getDate() + days);
                return result;
            }

            const rentEnd = addDays(rentStart, 3);

            const newOrder = {
                rentstart: rentStart,
                rentend: rentEnd,
                status: "Alquilada",
                userID: user.id,
                movieID: Number(movieId)
            }

            // console.log(newOrder);

            // console.log(newOrder);
            const listOrder = await database.query(`SELECT * FROM Orders`, { type: database.QueryTypes.SELECT })
            console.log(listOrder);
            console.log("------------------------------------------")

            const listOrders = await Order.findAll();
            console.log(listOrders);

            const nuevoPedido = await database.query(`INSERT INTO orders (rentstart, rentend, status , userID, movieID) VALUES ('${newOrder.rentstart}', '${newOrder.rentend}',' ${newOrder.status}', ${newOrder.userID}, ${newOrder.movieID})`)
            res.json(nuevoPedido)
            // await database.query(`INSERT INTO Orders (rentstart, rentend, status, userID, movieID, createdAt, updatedAt) VALUES (CURDATE(), CURDATE(), Alquilada, 2, 2)`);

            // Existe un pedido de esa película con estado "Alquilada"?
            // const alreadyOrder = await Order.findAll({ where: { movieID: movieId, userID: user.id, status: "Alquilada" } })
            /* const order = await Order.create(newOrder);

            res.send(order); */

        } catch (error) {
            res.json({ error: error.message });
        }
    },

    list: async (req, res) => {
        try {
            const listOrder = await database.query(`SELECT * FROM Orders`, { type: database.QueryTypes.SELECT })
            res.json(listOrder);
        } catch (error) {
            res.json({ error: 'No se encuentran pedidos' });
        }
    },

    listOrder: async (req, res) => {

        let orderID = req.body.id;

        try {
            const listOrderID = await database.query(`SELECT * FROM Orders WHERE id = "${orderID}"`, { type: database.QueryTypes.SELECT });
            res.json(listOrderID);
        } catch (error) {
            res.json({ error: 'No se puedo encontrar el pedido buscado' });
        }
    },

    listUserOrders: async (req, res) => {

        let user = jwt.decode(req.headers.token)
        let userEmail = user.email;

        try {
            const userOrderList = await database.query(`SELECT Orders.id AS 'Numero Pedido', Users.email AS 'email', 
            Movies.title AS 'title', Movies.poster_path AS 'poster', Orders.rentstart AS 'orderStart', Orders.rentend AS 'orderEnd'
            FROM Orders, Users, Movies 
            WHERE Orders.userID = Users.id AND Orders.movieID = Movies.id AND Users.email = "${userEmail}"`, { type: database.QueryTypes.SELECT });

            res.json(userOrderList);

        } catch (error) {
            res.json(error);
        }

    },

    createOrder: async (req, res) => {


    }
}