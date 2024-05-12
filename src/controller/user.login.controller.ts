import { RequestHandler } from "express";
import { userLogin } from "../repositories/user.login.repository";

export class controllerLogin {
  static login: RequestHandler = async (req, res, next) => {
    try {
      const token = await userLogin.userToken(req.body);

      if (token === null) {
        return res.status(403).json({ msg: "credenciais invalidas" });
      }

      return res.status(200).json({ msg: "login feito! = " + token });
    } catch (err) {
      return res.status(500).json({ msg: "erro no controller login " + err });
    }
  };
}
