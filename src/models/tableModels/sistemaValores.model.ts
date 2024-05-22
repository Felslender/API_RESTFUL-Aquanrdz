import Sequelize from "sequelize";
import db from "../../config/database";
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

  sensorTemperatura: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },

  sensorPh: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  dataAtivacao: {
    type: Sequelize.DATEONLY,
    allowNull: true,
    defaultValue: Sequelize.NOW(),
  },

  horaAtivacao: {
    type: Sequelize.TIME,
    allowNull: true,
    defaultValue: Sequelize.NOW(),
  },
},

{
  timestamps: false, 
});

export default sistema_valores;
