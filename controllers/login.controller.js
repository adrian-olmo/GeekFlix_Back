import database from "../database.js";
import jwt from 'jsonwebtoken';
import { User } from "../models/user.js";

export const loginController = {
    login: async (req, res) => {

        try {

            const loginUser = {
                email: req.headers.email,
                password: req.headers.password
            }

            const checkUser = await User.findOne({ where: { email: loginUser.email } });

            if (checkUser && checkUser.email === loginUser.email && checkUser.password === loginUser.password) {
                const jwtPayload = {
                    email: checkUser.email,
                    id: checkUser.id,
                    role: checkUser.role
                }

                const token = jwt.sign(jwtPayload, process.env.SECRET);
                res.status(200).json({ token, id: checkUser.id, role: checkUser.role })
            }
            else {
                res.status(404).send({ message: 'email or password is incorrect' })
            }
        } catch (error) {
            res.json({ message: error.message })
        }

    }
}