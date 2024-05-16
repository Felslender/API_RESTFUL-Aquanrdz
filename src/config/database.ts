import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const banco = process.env.MYSQL_DB ?? "";
const user = process.env.MYSQL_USER ?? "";
const senha = process.env.MYSQL_PASSWORD ?? "";

const db = new Sequelize(banco, user, senha, {
  dialect: "mysql",
  host: "localhost",
});

export const connect = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();


export default db;
