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
            // Función que toma suma un determinado numero de días a una fecha.
            function addDays(date, days) {
                var result = new Date(date);
                result.setDate(result.getDate() + days);
                return result;
            }
            const start = new Date();
            const end = addDays(start, 3);

            // Formateo de fechas para SQL
            const rentStart = start.toISOString().slice(0, 19).replace('T', ' ');
            const rentEnd = end.toISOString().slice(0, 19).replace('T', ' ');

            // El nuevo pedido
            const newOrder = {
                rentstart: rentStart,
                rentend: rentEnd,
                status: "Alquilada",
                userID: user.id,
                movieID: Number(movieId)
            }

            // Verificamos si existe ya un pedido activo (estado = alquilada) para el usuario. Si no hay, lo crea
            const listOrder = await database.query(`SELECT * FROM Orders WHERE userId = ${newOrder.userID} AND movieID = ${newOrder.movieID} AND status = '${newOrder.status}'`, { type: database.QueryTypes.SELECT })

            console.log(listOrder.length);

            if (listOrder.length == 0) {
                await database.query(`INSERT INTO Orders (rentstart, rentend, status , userID, movieID) VALUES ('${newOrder.rentstart}', '${newOrder.rentend}','${newOrder.status}', ${newOrder.userID}, ${newOrder.movieID})`)

                res.json({ message: "El pedido se ha realizado correctamente" });
            } else {
                res.json("El usuario tiene este alquiler en activo");
            }

        } catch (error) {
            res.json({ error: error.message });
        }
    },

    list: async (req, res) => {
        try {
            const listOrder = await database.query(`SELECT Orders.id AS 'id', Users.email AS 'email', 
            Movies.title AS 'title', Movies.poster_path AS 'poster', Orders.rentstart AS 'orderStart', Orders.rentend AS 'orderEnd', Orders.status AS 'estado'
            FROM Orders, Users, Movies WHERE Orders.userID = Users.id AND Orders.movieID = Movies.id`, { type: database.QueryTypes.SELECT })
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
            Movies.title AS 'title', Movies.poster_path AS 'poster', Orders.rentstart AS 'orderStart', Orders.rentend AS 'orderEnd', Orders.status AS 'estado'
            FROM Orders, Users, Movies 
            WHERE Orders.userID = Users.id AND Orders.movieID = Movies.id AND Users.email = "${userEmail}"`, { type: database.QueryTypes.SELECT });

            res.json(userOrderList);

        } catch (error) {
            res.json(error);
        }

    },

    cancelOrder: async (req, res) => {

        let idOrder = req.params.id;
        console.log(idOrder);

        try {

            const getOrder = await database.query(`SELECT * FROM Orders WHERE id = ${idOrder}`, { type: database.QueryTypes.SELECT });

            if (getOrder.length == 0) {
                res.json({ message: "El pedido no existe" })
            } else {
                await database.query(`UPDATE Orders SET status = "Caducada" WHERE id = ${idOrder}`);
                res.json({ message: "El pedido ha cambiado de estado correctamente" })
            }


        } catch (error) {
            res.json({ message: "Algo fue mal" });
        }

    }
}