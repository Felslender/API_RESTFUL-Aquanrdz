import peixes from "../models/tableModels/peixes.model";
import db from "../config/database";
import sistemas from "../models/tableModels/sistemas.model";
import usu_sistema from "../models/tableModels/usu_sistema.model";

import { Peixe } from "../models/infos.model";
import { User } from "../models/infos.model";
import { Usuario_sistema } from "../models/infos.model";
import { Sistema } from "../models/infos.model";

export class repositorySistema {

    static createSistema = async (infoSistema: Sistema & User, userId: User): Promise<Sistema | null> => {

        try{
          const { id_peixe, nome_sistema, qto_peixe, tamanho_tanque } = infoSistema;
          const usuarioId = userId
    
          const newSistema = (await sistemas.create(
            {
              id_peixe: id_peixe,
              nome_sistema: nome_sistema,
              qto_peixe: qto_peixe,
              tamanho_tanque: tamanho_tanque,
          })) as Sistema
    
          if(newSistema == null){
            return null
          }
    
          const encontrarIdSisetma = (await sistemas.findOne({
            where: {
              nome_sistema: nome_sistema
            }
          })) as Sistema
          
          const idSistema = encontrarIdSisetma ? encontrarIdSisetma.id_sistema : null;
    
          if(idSistema == null){
            return null
          }
          
          const atrelarUsuario = (await usu_sistema.create({
            id_usuario: usuarioId,
            id_sistema: idSistema,
          }));
    
    
          if(!atrelarUsuario){
            return null
          }
    
          return newSistema
    
          }catch (err) {
            throw err
          }
      }


    static sistemasUsuario = async (userId: User) => {
        try {
            const encontrarIdSistemas = await usu_sistema.findAll({
                where: {
                    id_usuario: userId
                }
            });
    
            if (encontrarIdSistemas.length === 0) {
                return null;
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