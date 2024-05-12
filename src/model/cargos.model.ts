import Sequelize from "sequelize";
import db from "../db/configs";

const cargos = db.define("cargos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  nome_cargo: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
});

export default cargos;
