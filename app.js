import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//Routes
import { movieRoutes } from "./routes/movie.routes.js";
import { userRoutes } from "./routes/user.routes.js";
import { genreRoutes } from "./routes/genre.routes.js";
import { orderRoutes } from "./routes/order.routes.js";
import { registerRoutes } from "./routes/register.routes.js";
import { loginRoutes } from "./routes/login.routes.js";

//Configurations
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, dni, phone, auth"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//Use Routes
app.use('/movies', movieRoutes);
app.use('/users', userRoutes);
app.use('/genres', genreRoutes);
app.use('/orders', orderRoutes);
app.use('/signup', registerRoutes);
app.use('/login', loginRoutes);

//Database Server
app.listen(5000, () => {
    console.log('Connected server on port 5000 ');
})