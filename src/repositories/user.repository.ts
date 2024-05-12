import usuarios from "../model/user.model";
import telefones from "../model/telefoneUser.model";
import bcrypt from "bcrypt";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

export class User extends Model<InferAttributes<User>,InferCreationAttributes<User>> {
  declare id_usuario: CreationOptional<number>;
  declare nome: string;
  declare email: string;
  declare senha: string;
  declare cod: number;
  declare telefone: number;
  declare id_cargo: number;
}

export class repositoryUser {
  static createUser = async (infUser: User): Promise<User | null> => {
    try {
      const { nome, email, senha, cod, telefone } = infUser;

      const salt = await bcrypt.genSalt(12);
      const senhaHash = await bcrypt.hash(senha, salt);

      const newUser = (await usuarios.create({
        id_cargo: 2,
        nome: nome,
        email: email,
        senha: senhaHash,
      })) as User;

      const encontrarIdUser = (await usuarios.findOne({
        where: {
          email: email,
        },
      })) as User;

      const idUser = encontrarIdUser ? encontrarIdUser.id_usuario : null;

      await telefones.create({
        id_usuario: idUser,
        cod: cod,
        tel_num: telefone,
      });

      return newUser;
    } catch (err) {
      throw err;
    }
  };
}

