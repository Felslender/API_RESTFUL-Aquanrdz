import peixes from "../models/tableModels/peixes.model";
import db from "../config/database";
import sistemas from "../models/tableModels/sistemas.model";
import usu_sistema from "../models/tableModels/usu_sistema.model";

import { Peixe } from "../models/infos.model";
import { User } from "../models/infos.model";
import { Usuario_sistema } from "../models/infos.model";

export class repositorySistema {


    static sistemasUsuario = async (userId: User) => {
        try {
            const encontrarIdSistemas = await usu_sistema.findAll({
                where: {
                    id_usuario: userId
                }
            });
    
            if (encontrarIdSistemas.length === 0) {
                return [];
            }

            const idSistemas = encontrarIdSistemas.map(item => item.id_sistema);
    
            const encontrarSistemas = await sistemas.findAll({
                where: {
                    id_sistema: idSistemas
                }
            });
    
            return encontrarSistemas;
        } catch (err) {
            return err;
        }
    }
    


    static peixesCadastrados = async() => {

        const peixesSistema = (await peixes.findAll())

        return peixesSistema

    }
}