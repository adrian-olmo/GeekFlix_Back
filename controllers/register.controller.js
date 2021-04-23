import database from "../database.js";

export const registerController = {
    create: async (req, res) => {

        let email = req.body.email;
        let password = req.body.password;

        try {
            const newUser = await database.query(`INSERT INTO users (email, password) VALUES ('${email}', '${password}')`)
            res.json(newUser);
        } catch (error) {
            res.json({ error: 'No se pudo crear usuario' })
        }

    }





}
