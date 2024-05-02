import Sequelize from 'sequelize';
import db from '../db/configs';
import cargos from './cargos.model';

const users = db.define('users', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    id_cargo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: cargos,
            key: 'id'
        }
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, 

{
    timestamps: false 
});

export default users;
