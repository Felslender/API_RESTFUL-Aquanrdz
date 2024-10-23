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


      static sistemasUsuario = async (userId: number): Promise<Sistema[] | null> => {
        try {
            const encontrarIdSistemas = await usu_sistema.findAll({
                where: {
                    id_usuario: userId
                },
                attributes: ['id_sistema'] 
            });
    
            if (encontrarIdSistemas.length === 0) {
                return null;
            }
    
            const idSistemas = encontrarIdSistemas.map(item => item.get('id_sistema'));
    
            const encontrarSistemas = await sistemas.findAll({
                where: {
                    id_sistema: idSistemas
                }
            });
    
            const sistemasConvertidos: Sistema[] = encontrarSistemas.map(sistema => sistema.toJSON() as Sistema);
    
            return sistemasConvertidos;
        } catch (err) {
            console.error(`Erro ao buscar sistemas para o usuário ${userId}:`, err);
            throw new Error('Erro ao buscar sistemas do usuário');
        }
    }
    
    

    static sistemaInfo = async (id_sistema: number) => {

      if (typeof id_sistema !== 'number' || isNaN(id_sistema)) {
        throw new Error('id_sistema não é valido');
      }
    
      try {
        console.log("ID do sistema no repositório:", id_sistema);
    
        const sistemaEncontrado = await sistemas.findAll({
          where: {
            id_sistema: id_sistema
          }
        });
    
        if (sistemaEncontrado.length === 0) {
          return null;
        }
    
        const primeiroEncontrado = sistemaEncontrado[0];

        return primeiroEncontrado;
      } catch (error) {
        throw error;
      }
    };
    
    static peixesCadastrados = async() => {

        const peixesSistema = (await peixes.findAll())

        return peixesSistema

    }
}