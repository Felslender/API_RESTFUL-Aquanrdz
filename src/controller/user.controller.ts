import { RequestHandler } from "express";
import { repositoryUser } from "../repositories/user.repository";


export class userController{

     static createdUser: RequestHandler = async(req, res, next) => {

        try{
            const createdUser = await repositoryUser.createUser(req.body);
            return res.status(201).json({msg: "Usuario criado com sucesso!" + createdUser})
        }catch(err){
            return res.status(500).json({msg:"algo inesperado ocorreu" + err})
        }
    }


}




