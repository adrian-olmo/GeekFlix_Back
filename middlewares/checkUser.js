import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import bcrypt from 'bcrypt';

const checkUser = async (req, res, next) => {
    try {
        console.log("Verifying user...");

        jwt.verify(req.headers.token, process.env.SECRET);

        const user = jwt.decode(req.headers.token);
        const result = await User.findOne({ where: { email: user.email } })

        // if (!bcrypt.compareSync(req.headers.password, result.password)) {
        //     return res.status(403).send({ message: "Email or password incorrect" })
        // }

        next();

    } catch (error) {

        res.status(401).send({ message: error.message });

    }
}

export default checkUser;