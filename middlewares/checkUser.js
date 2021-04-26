import jwt from 'jsonwebtoken';

const checkUser = async (req, res, next) => {
    try {
        console.log("Verifying user...");

        jwt.verify(req.headers.token, process.env.SECRET);
        next();

    } catch (error) {

        res.status(401).send({ message: error.message });
    }
}

export default checkUser;