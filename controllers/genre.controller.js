import database from "../database.js";

export const genreController = {
    list: async (req, res) => {
        try {
            const listGenres = await database.query(`SELECT * FROM genres `, { type: database.QueryTypes.SELECT })
            res.json(listGenres)
        } catch (error) {
            res.json({ error: 'Error al encontrar generos' });
        }
    },

    listGenre: async (req, res) => {

        let genreName = req.body.name;

        try {
            const genreList = await database.query(`SELECT * FROM genres WHERE name = "${genreName}"`, { type: database.QueryTypes.SELECT })
            res.json(genreList);
        } catch (error) {
            res.json({ error: 'Error al encontrar genero' })
        }

    }
}