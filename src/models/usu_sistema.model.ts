import Sequelize from "sequelize";
import db from "../config/database";
import sistemas from "./sistemas.model";
import usuarios from "./user.model";

const usu_sistema = db.define("USUARIO_SISTEMA", {
  id_usuario: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: usuarios,
      key: "id_usuario",
    },
  },

  id_sistema: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: sistemas,
      key: "id_sistema",
    },
  },
}, 

  {
    timestamps: false, 
  }
);


export default usu_sistema;
