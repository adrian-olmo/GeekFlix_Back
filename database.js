import sequelize from "sequelize";

const db = 'geekflix';
const username = 'root'
const password = '';

const database = new sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
    define: {
        timestamps: false
    }
});

database.
    authenticate()
    .then(() => {
        async () => {
            console.log("Database Connected");
            try {
                await database.sync({ force: true });
            } catch (error) {
                console.log(error.message);
            }
        }
    })
    .catch(e => {
        console.log(e.message);
    })

export default database;