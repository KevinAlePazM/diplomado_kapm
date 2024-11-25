import { Sequelize } from "sequelize";
import'dotenv/config'

const sequelize = new Sequelize(
    process.env.DB_DATABASE, // db name
    process.env.DB_USER, // username
    process.env.DB_PASSWORD, // pass
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT, // or 'mysql' or 'sqlite'
        logging: console.log,
        dialectOption: {
            ssl: {
                require: false,
                rejectUnauthorized: false,
            }
        }
    }
);

export default sequelize