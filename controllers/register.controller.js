import database from "../database.js";
import { User } from "../models/index.js";
import bcrypt from "bcrypt";

export const registerController = {
    create: async (req, res) => {

        try {
            let email = req.body.email;
            let password = req.body.password;
            let hashTemp = 10;

            const checkUser = await User.findOne({ where: { email: email } });

            const emailValidation = email.split("@");

            // basic email validation
            if (!checkUser && emailValidation.length === 2 && password.length > 3) {

                try {
                    const passwordHash = await bcrypt.hash(password, hashTemp);

                    const newUser = await database.query(`INSERT INTO Users (email, password) VALUES ('${email}', '${passwordHash}')`)
                    console.log(`User with email ${email} was created`);
                    res.sendStatus(200);

                } catch (error) {
                    res.status(400).send({ message: error.message });
                }
            } else {
                res.status(409).send({ message: "Email is already registered" });
            }
        } catch (error) {
            res.status(400).send({ message: error.message })
        }

    }
}
