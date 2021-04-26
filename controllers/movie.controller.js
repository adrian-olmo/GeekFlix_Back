import database from "../database.js";
import { Genre, Movie } from "../models/index.js";

export const movieController = {
    list: async (req, res) => {

        try {
            const movieList = await Movie.findAndCountAll({
                include: [
                    {
                        model: Genre,
                        attributes: ['name']
                    }
                ],
                attributes: ['id', 'title', 'poster_path']
            })

            res.status(201).send(movieList);
        }
        catch (error) {
            res.json({ message: error.message });
        }
    },

    listName: async (req, res) => {

        const title = req.body.title

        try {
            const titleMovie = await database.query(`SELECT * FROM Movies WHERE title = "${title}"`, { type: database.QueryTypes.SELECT })
            res.json(titleMovie)
        } catch (error) {
            res.json({ error: 'Pelicula no encontrada' });
        }
    }
}