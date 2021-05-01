import database from "../database.js";

export const userController = {
    list: async (req, res) => {
        try {
            const listUsers = await database.query(`SELECT * FROM Users `, { type: database.QueryTypes.SELECT })
            res.json(listUsers);

        } catch (error) {
            res.json({ error: 'Error al encontrar usuarios' });
        }
    },

    listEmail: async (req, res) => {

        let userEmail = req.body.email;

        try {
            const emailList = await database.query(`SELECT * FROM Users WHERE email = "${userEmail}"`, { type: database.QueryTypes.SELECT })
            res.json(emailList);
        } catch (error) {
            res.json({ error: 'Error al encontrar email' });

        }
    }
}