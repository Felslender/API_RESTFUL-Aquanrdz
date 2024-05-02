import  Sequelize  from "sequelize";
import db from '../db/configs';


const telefones = db.define('telefones', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },

    cod: {
        type: Sequelize.SMALLINT,
        allowNull: false,
    },

    tel_num: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },


})

export default telefones;