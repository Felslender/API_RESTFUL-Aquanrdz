import Sequelize from "sequelize";
import db from "../config/database";
import cargos from "../models/cargos.model";

const usuarios = db.define("USUARIOS", {
    id_usuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    id_cargo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: cargos,
        key: "id_cargo",
      },
    },

    nome: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },

    senha: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  },

  {
    timestamps: false,
  }
);

export default usuarios;
