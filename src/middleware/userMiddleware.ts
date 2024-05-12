import { RequestHandler } from "express";
import users from "../model/user.model";
import cargos from "../model/cargos.model";
import { User } from "../repositories/user.repository";

export class userMiddleware {
  static verificarCargos: RequestHandler = async (req, res, next) => {
    const verificarCargo = await cargos.findAll({
      where: {
        id: [1, 2],
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
}
