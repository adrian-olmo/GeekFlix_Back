import { User } from "./user.js";
import { Order } from "./order.js";
import { Genre } from "./genre.js";
import { Movie } from "./movie.js";

//Relaciones 1:N
User.hasMany(Order, { foreignKey: "userID" })
Genre.hasMany(Movie, { foreignKey: "genreID" })

//Relaciones 1:1
Movie.belongsTo(Order, { foreignKey: "movieID" })
