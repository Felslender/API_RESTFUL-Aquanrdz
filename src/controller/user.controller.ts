import { RequestHandler } from "express";
import { repositoryUser } from "../repositories/user.repository";
import { create } from "domain";


export class userController{

     static createdUser: RequestHandler = async(req, res, next) => {

        try{

            const createdUser = await repositoryUser.createUser(req.body);

            if(!createdUser){
                return res.status(404).json({msg: "algo ocorreu ao criar usuario " + createdUser})
            }

            return res.status(201).json({msg: "Usuario criado com sucesso! Olá " + createdUser.nome +"!"})
            
        }catch(err){
            return res.status(500).json({msg:"algo inesperado ocorreu" + err})
        }
    }

}




