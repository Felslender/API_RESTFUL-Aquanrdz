import { RequestHandler } from "express";
import { repositoryUser } from "../repositories/user.repository";
import jwt, {JwtPayload} from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET ?? ""

export class userController {
  static createdUser: RequestHandler = async (req, res, next) => {
    try {
      const createdUser = await repositoryUser.createUser(req.body);

      if (!createdUser) {
        return res
          .status(404)
          .json({ msg: "algo ocorreu ao criar usuario " + createdUser });
      }

      return res
        .status(201)
        .json({
          msg: "Usuario criado com sucesso! Olá " + createdUser.nome + "!",
        });
    } catch (err) {
      return res.status(500).json({ msg: "algo inesperado ocorreu" + err });
    }
  };


  static createSistema: RequestHandler = async(req, res, next) => {
    try{

      const authHeader = req.headers.authorization

      if (!authHeader) {
        return res.status(401).json({ msg: "Authorization header esta faltando" });
      }

      const token = authHeader.split(' ')[1];
      const decodedToken = jwt.verify(token, SECRET_KEY) as JwtPayload;
      const userId = decodedToken.userId
      
      const createdSistema = await repositoryUser.createSistema(req.body, userId);

    if(createdSistema == null){
      return res.status(404).json({ msg: "algum erro ecorreu, sistema não criado"})
    }

    return res.status(201).json({msg: "sistema criado com sucesso, seu sistema: "+ createdSistema?.nome_sistema})
    
    }catch(err){
      console.log("algo inesperado aconteceu"+ err)
    }
    

  }
}
