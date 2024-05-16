import users from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/infos.model"

const SECRET = process.env.SECRET ?? "";

export class userLogin {
  static userToken = async (infoUser: User): Promise<string | null> => {
    try {
      const { email, senha } = infoUser;

      const userInfos = (await users.findOne({
        where: {
          email: email,
        },
      })) as User;

      if (!userInfos) {
        return null;
      }

      const senhaHashed = userInfos.senha;
      const senhaMatch = await bcrypt.compare(senha, senhaHashed);

      if (senhaMatch) {
        const token = jwt.sign(
          {
            userId: userInfos.id_usuario,
            email: userInfos.email,
            role: userInfos.id_cargo,
          },
          SECRET,
          { expiresIn: "1h" }
        );

        return token;
      } else {
        throw new Error("Credenciais inválidas");
      }
    } catch (error) {
      console.log("Erro no repositorio login: " + error);
      throw new Error("Erro ao processar autenticação do usuário");
    }
  };
}
