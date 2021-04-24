import database from "../database.js";

export const loginController = {
    login: async (req, res) => {

        let email = req.headers.email
        let password = req.headers.password

        try {
            const userLogin = await database.query(`SELECT * FROM Users WHERE email = '${email}' AND password = '${password}'`, { type: database.QueryTypes.SELECT })
            res.json(userLogin)
        } catch (error) {
            res.json({ error: 'Error al iniciar sesion' })
        }

    }
}