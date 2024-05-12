import Sequelize from "sequelize";
import db from "../db/configs";

const peixes = db.define("PEIXES", {
  id_peixe: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  nome_peixe: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  nome_cient: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  media_peso: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },

  media_tamanho: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
},
{
  timestamps: false, 
});

export default peixes;
