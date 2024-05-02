import { RequestHandler } from "express";
import { repositoryUser } from "../repositories/user.repository";


export const createdUser: RequestHandler = async(req, res, next) => {

    const createdUser = await repositoryUser.createUser(req.body);
 
    try{
        return res.status(201).json({msg: "Usuario criado com sucesso!" + createdUser})
    }catch(err){
        return res.status(500).json({msg:"algo inesperado ocorreu" + err})
    }
}


