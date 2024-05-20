
import { sistema_valores } from "../models/infos.model";
import sistema_valores_tabela from "../models/sistema_valores.model";


import { temperaturaAtual } from "../config/mqtt";




export class repositoryMqtt {

    static createTemperatura = async(infoMqtt: sistema_valores) => {

        const { id_sistema } = infoMqtt

        const newTemperatura = (await sistema_valores_tabela.create({
            id_sistema: id_sistema,
            sensorTemperatura: temperaturaAtual,
            sensorPh: "0"
        })) as sistema_valores

        return newTemperatura

    }



}











