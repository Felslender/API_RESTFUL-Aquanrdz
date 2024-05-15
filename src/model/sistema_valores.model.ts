import Sequelize from "sequelize";
import db from "../db/configs";
import sistemas from "./sistemas.model";

const sistema_valores = db.define("SISTEMA_VALORES", {
  id_valores: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  id_sistema: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: sistemas,
      key: "id_sistema",
    },
  },

  temperatura: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },

  alimentador: {
    type: Sequelize.DATE,
    allowNull: true,
  },
},

{
  timestamps: false, 
});

export default sistema_valores;