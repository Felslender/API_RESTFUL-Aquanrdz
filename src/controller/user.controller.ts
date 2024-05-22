import { RequestHandler } from "express";
import { repositoryUser } from "../repositories/user.repository";

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
      const createdSistema = await repositoryUser.createSistema(req.body);

    console.log("seu sistema criado: "+ createdSistema?.nome_sistema)

    if(createdSistema == null){
      return res.status(404).json({ msg: "algum erro ecorreu, sistema não criado"})
    }

    return res.status(201).json({msg: "sistema criado com sucesso, seu sistema: "+ createdSistema?.nome_sistema})
    
    }catch(err){
      console.log("algo inesperado aconteceu"+ err)
    }
    

  }
}
