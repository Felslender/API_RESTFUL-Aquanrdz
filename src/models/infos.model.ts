import { Model, InferAttributes, InferCreationAttributes, CreationOptional, } from "sequelize";


export class User extends Model<InferAttributes<User>,InferCreationAttributes<User>> {
    declare id_usuario: CreationOptional<number>;
    declare nome: string;
    declare email: string;
    declare senha: string;
    declare id_cargo: number;
  }

  export class Telefone extends Model<InferAttributes<Telefone>,InferCreationAttributes<Telefone>> {
    declare id_telefone: CreationOptional<number>;
    declare id_usuario: number;
    declare cod: number;
    declare telefone: number; 
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
  declare nome_peixe: string;
  declare nome_cient: string;
  declare media_peso: string;
  declare media_tamanho: string;
}


export class sistema_valores extends Model<InferAttributes<Peixe>,InferCreationAttributes<Peixe>> {
  declare id_valores: CreationOptional<number>;
  declare id_sistema: number;
  declare sensorTemperatura: string;
  declare sensorPh: string;
  declare dataAtivacao: string;
  declare horaAtivacao: string;
}


export class Usuario_sistema extends Model<InferAttributes<Peixe>,InferCreationAttributes<Peixe>> {
  declare id_usuario: CreationOptional<number>;
  declare id_sistema: CreationOptional<number>;
}