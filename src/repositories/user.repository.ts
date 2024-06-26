import usuarios from "../models/tableModels/user.model";
import telefones from "../models/tableModels/telefoneUser.model";
import sistemas from '../models/tableModels/sistemas.model'
import usu_sistema from "../models/tableModels/usu_sistema.model";
import bcrypt from "bcrypt";
import { User, Sistema, Telefone } from "../models/infos.model"


export class repositoryUser {

  static createUser = async (infUser: User & Telefone): Promise<User | null> => {
    try {
      const { nome, email, senha, cod, telefone } = infUser;

      const codNumero = Number(cod);
      const telefoneNumero = Number(telefone);

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
        cod: codNumero,
        tel_num: telefoneNumero,
      });

      return newUser;

    } catch (err) {
      throw err;
    }

   
  };

  static infoUser = async(userId: User): Promise<{user: User | null, tel: Telefone | null}> => {

    const idUsuario = userId

    const infos = (await usuarios.findOne({
      where: {
        id_usuario: idUsuario
      }
    })) as User


    const telefoneEncontrado = (await telefones.findOne({
      where: {
        id_usuario: idUsuario
      }
    })) as Telefone


    return {
      user: infos,
      tel: telefoneEncontrado
    }

  }
  





}

