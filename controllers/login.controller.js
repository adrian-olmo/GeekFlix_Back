import database from "../database.js";
import jwt from 'jsonwebtoken';
import { User } from "../models/index.js";
import bcrypt from "bcrypt";

export const loginController = {
    login: async (req, res) => {

        try {

            const loginUser = {
                email: req.headers.email,
                password: req.headers.password
            }

            const checkUser = await User.findOne({ where: { email: loginUser.email } });

            if (!bcrypt.compareSync(loginUser.password, checkUser.password)) {
                return res.status(403).send({ message: "Email or password incorrect" })
            }

            if (checkUser && checkUser.email === loginUser.email) {
                const jwtPayload = {
                    email: checkUser.email,
                    id: checkUser.id,
                    role: checkUser.role
                }

                const token = jwt.sign(jwtPayload, process.env.SECRET);
                res.status(200).json({ token, id: checkUser.id, role: checkUser.role })
            }
            else {
                res.status(403).send({ message: "Email or password incorrect" })
            }
        } catch (error) {
            res.json({ message: error.message })
        }

    }
}