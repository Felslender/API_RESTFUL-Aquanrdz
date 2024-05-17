import { Model, InferAttributes, InferCreationAttributes, CreationOptional, } from "sequelize";


export class User extends Model<InferAttributes<User>,InferCreationAttributes<User>> {
    declare id_usuario: CreationOptional<number>;
    declare nome: string;
    declare email: string;
    declare senha: string;
    declare cod: number;
    declare telefone: number;
    declare id_cargo: number;
  }


export class Sistema extends Model<InferAttributes<Sistema>,InferCreationAttributes<Sistema>> {
    declare id_sistema: CreationOptional<number>;
    declare id_peixe: number;
    declare nome_sistema: string;
    declare qto_peixe: number;
    declare tamanho_tanque: number;
  }


export class Peixe extends Model<InferAttributes<Peixe>,InferCreationAttributes<Peixe>> {
  declare id_peixe: CreationOptional<number>;
  declare nome_peixe: number;
  declare nome_cient: string;
  declare media_peso: string;
  declare media_tamanho: string;
}