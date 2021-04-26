import database from "../database.js";
import { User } from "../models/index.js";

export const registerController = {
    create: async (req, res) => {

        let email = req.body.email;
        let password = req.body.password;

        const checkUser = await User.findOne({ where: { email: email } });

        const emailValidation = email.split("@");

        // basic email validation
        if (!checkUser && emailValidation.length === 2 && password.length > 3) {

            try {
                const newUser = await database.query(`INSERT INTO Users (email, password) VALUES ('${email}', '${password}')`)
                console.log(`User with email ${email} was created`);
                res.sendStatus(200);

            } catch (error) {
                res.status(400).send({ message: error.message });
            }
        } else {
            res.status(400).send({ message: "Email or password is invalid" });
        }
    }
}
