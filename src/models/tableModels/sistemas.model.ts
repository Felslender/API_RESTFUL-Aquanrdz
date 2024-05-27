import Sequelize from "sequelize";
import db from "../../config/database";
import peixes from "./peixes.model";

const sistemas = db.define("SISTEMAS", {
  id_sistema: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
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
    allowNull: true,
  },

  qto_peixe: {
    type: Sequelize.SMALLINT,
    allowNull: false,
  },

  tamanho_tanque: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
},

{
  timestamps: false, 
});

export default sistemas;
