import Sequelize from "sequelize";
import db from "../db/configs";
import peixes from "./peixes.model";

const sistemas = db.define("SISTEMAS", {
  id_sistema: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  id_peixe: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: peixes,
      key: "id_peixe",
    },
  },

  nome_sistema: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  qto_peixe: {
    type: Sequelize.SMALLINT,
    allowNull: false,
  },

  tamanho_peixe: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
},
{
  timestamps: false, 
});

export default sistemas;
