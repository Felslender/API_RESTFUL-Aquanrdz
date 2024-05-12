import Sequelize from "sequelize";
import db from "../db/configs";
import usuarios from "./user.model";

const telefones = db.define("TELEFONES", {
    id_telefone: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: usuarios,
        key: "id_usuario",
      },
    },

    cod: {
      type: Sequelize.SMALLINT,
      allowNull: false,
    },

    tel_num: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default telefones;
