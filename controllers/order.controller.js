import database from "../database.js";

export const orderController = {
    list: async (req, res) => {
        try {
            const listOrder = await database.query(`SELECT * FROM orders`, { type: database.QueryTypes.SELECT })
            res.json(listOrder);
        } catch (error) {
            res.json({ error: 'No se encuentran pedidos' });
        }
    },

    listOrder: async (req, res) => {

        let orderID = req.body.id;

        try {
            const listOrderID = await database.query(`SELECT * FROM orders WHERE id = "${orderID}"`, { type: database.QueryTypes.SELECT });
            res.json(listOrderID);
        } catch (error) {
            res.json({ error: 'No se puedo encontrar el pedido buscado' });
        }
    },

    listUserOrder: async (req, res) => {


        let userEmail = req.body.email;

        try {
            const userOrderList = await database.query(`SELECT orders.id AS 'Numero Pedido', users.email AS 'Email Usuario', 
            movies.title AS 'Pelicula', orders.rentstart AS 'Fecha Alquiler', orders.rentend AS 'Fecha Devolucion'
            FROM orders, users, movies 
            WHERE orders.userID = users.id AND orders.movieID = movies.id AND users.email = "${userEmail}"`, { type: database.QueryTypes.SELECT });

            res.json(userOrderList);

        } catch (error) {
            res.json(error);
        }

    }
}