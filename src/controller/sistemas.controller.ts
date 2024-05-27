import { RequestHandler } from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import { repositorySistema } from "../repositories/sistemas.repository";
import peixes from "../models/tableModels/peixes.model";

const SECRET_KEY = process.env.SECRET ?? ""

export class controllerSistema {

    static createSistema: RequestHandler = async(req, res, next) => {
        try{
    
          const authHeader = req.headers.authorization
    
          if (!authHeader) {
            return res.status(401).json({ msg: "Authorization header esta faltando" });
          }
    
          const token = authHeader.split(' ')[1];
          const decodedToken = jwt.verify(token, SECRET_KEY) as JwtPayload;
          const userId = decodedToken.userId
          
          const createdSistema = await repositorySistema.createSistema(req.body, userId);
    
        if(createdSistema == null){
          return res.status(404).json({ msg: "algum erro ecorreu, sistema não criado"})
        }
    
        return res.status(201).json({msg: "sistema criado com sucesso, seu sistema: "+ createdSistema?.nome_sistema})
        
        }catch(err){
          console.log("algo inesperado aconteceu"+ err)
        }
        
    
      }


    static allPeixes: RequestHandler = async(req, res, next) => {

        try{
            const peixesSistema = await repositorySistema.peixesCadastrados();

            if(!peixesSistema || peixesSistema.length === 0){
                return res.status(404).json({msg: "nenhum peixe cadastrado no site" })
            }

            return res.status(200).json({msg: "peixes cadastrados encontrados: ", peixes: peixesSistema})
        }catch(err){
            return res.status(500).json({msg: "algo ocorreu ao tentar encontrar os peixes cadastrados " + err})
        }
        

    }
    

    static sistemasUsuario: RequestHandler = async(req, res, next) => {

        try{

            const authHeader = req.headers.authorization

            if (!authHeader) {
                return res.status(401).json({ msg: "Authorization header esta faltando" });
              }

            const token = authHeader.split(' ')[1];
            const decodedToken = jwt.verify(token, SECRET_KEY) as JwtPayload;
            const userId = decodedToken.userId

            const sistemasEncontrados = await repositorySistema.sistemasUsuario(userId);

            if(!sistemasEncontrados || sistemasEncontrados === null){
                return res.status(404).json({msg: "você não possui nenhum sistema cadastrado" })
            }

            return res.status(200).json({sistemas: sistemasEncontrados})
        }catch(err){
            return res.status(500).json({msg: "algo ocorreu ao tentar encontrar os peixes cadastrados " + err})
        }
        

    }
}