import database from "../database.js";

export const orderController = {
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

    listUserOrder: async (req, res) => {


        let userEmail = req.body.email;

        try {
            const userOrderList = await database.query(`SELECT Orders.id AS 'Numero Pedido', Users.email AS 'Email Usuario', 
            Movies.title AS 'Pelicula', Orders.rentstart AS 'Fecha Alquiler', Orders.rentend AS 'Fecha Devolucion'
            FROM Orders, Users, Movies 
            WHERE Orders.userID = Users.id AND Orders.movieID = Movies.id AND Users.email = "${userEmail}"`, { type: database.QueryTypes.SELECT });

            res.json(userOrderList);

        } catch (error) {
            res.json(error);
        }

    }
}