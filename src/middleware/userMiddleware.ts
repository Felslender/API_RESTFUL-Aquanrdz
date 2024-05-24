import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import users from "../models/tableModels/user.model";
import cargos from "../models/tableModels/cargos.model";
import { User } from "../models/infos.model";


const SECRET_KEY = process.env.SECRET ?? ""

export class userMiddleware {
  static verificarCargos: RequestHandler = async (req, res, next) => {
    const verificarCargo = await cargos.findAll({
      where: {
        id_cargo: [1, 2],
      },
    });

    if (verificarCargo.length < 2) {
      const newCargo1 = await cargos.create({
        nome_cargo: "adm",
      });

      const newCargo2 = await cargos.create({
        nome_cargo: "user",
      });
    }

    next();
  };

  static encontrarEmail: RequestHandler = async (req, res, next) => {
    const { email } = req.body;

    const encontrarEmail = (await users.findOne({
      where: {
        email: email,
      },
    })) as User;

    const tipoEmail = encontrarEmail ? encontrarEmail.email : null;

    if (tipoEmail) {
      return res
        .status(500)
        .json({ msg: "email ja cadastrado, por favor, utilize outro!" });
    }

    
    next();
  };


  static verificarAcesso: RequestHandler = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ msg: "Authorization header esta faltando" });
    }

    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, SECRET_KEY) as JwtPayload;
    const role = decodedToken.role
  
    if(role === 2){
      
      next()
    }else {
      return res.status(404).json({msg: "você não possui acesso a esse serviço"})
    }
  }
}

