import Sequelize from "sequelize";
import db from "../db/configs";

const cargos = db.define("CARGOS", {
  id_cargo: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  nome_cargo: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
},
{
  timestamps: false, 
});


export default cargos;
