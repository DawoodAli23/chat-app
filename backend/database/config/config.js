require("dotenv").config();
module.exports = {
    development: {
        username: process.env.DB_username,
        password: process.env.DB_password,
        database: process.env.DB_database,
        host: "localhost",
        port: 5432,
        dialect: "postgres",
    },
};
