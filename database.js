import sequelize from "sequelize";

const db = 'geekfliks';
const username = 'root'
const password = '';

const database = new sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
    define: {
        timestamps: false
    }
});

database.authentication().then(() => {
    async () => {
        console.log('database connected');
        try {
            await database.sync({ force: true });
        } catch (error) {
            console.log(error);
        }
    };
}).catch(e => {
    console.log(e.message);
});

export default database;