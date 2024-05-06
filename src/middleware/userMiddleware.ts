import { RequestHandler } from 'express';
import users from '../model/user.model';
import { infoTipo } from '../repositories/user.repository';


export class userMiddleware {

    static encontrarEmail: RequestHandler = async(req, res, next) => {

        const { email } = req.body;

        const encontrarEmail = await users.findOne({
            where: {
                email: email
            }
        }) as infoTipo

        const tipoEmail = encontrarEmail ? encontrarEmail.email: null

        if(tipoEmail){
            return res.status(500).json({msg: "email ja cadastrado, por favor, utilize outro!"})
        }

        next();
    }


    
}
