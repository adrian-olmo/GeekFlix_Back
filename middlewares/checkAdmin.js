import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

const checkAdmin = async (req, res, next) => {
    try {
        console.log("verifying if admin...");

        const tokenData = jwt.decode(req.headers.token);

        const user = await User.findOne({ where: { email: tokenData.email } });

        if (user.role !== 'admin') {
            res.status(401).send({ message: "You're not authorize" })
        } else {
            next();
        }

    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}

export default checkAdmin;