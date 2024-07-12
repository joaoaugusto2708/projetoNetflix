import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "netflix_development",
    username: "netflix_user",
    password: "netflix",
    define: {
        underscored: true //Configura para utilizar o camelCase no JavaScript
    }
})