import database from "../database.js";

export const movieController = {
    list: async (req, res) => {
        try {
            const listMovies = await database.query(`SELECT * FROM movies `, { type: database.QueryTypes.SELECT })
            res.json(listMovies);

        } catch (error) {
            res.json({ error: error })
        }
    },

    listName: async (req, res) => {

        const title = req.body.title

        try {
            const titleMovie = await database.query(`SELECT * FROM movies WHERE title = "${title}"`, { type: database.QueryTypes.SELECT })
            res.json(titleMovie)
        } catch (error) {
            res.json({ error: 'Pelicula no encontrada' });
        }
    }
}