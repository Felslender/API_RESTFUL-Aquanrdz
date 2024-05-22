import { mediaTemp, temperaturaAtual } from "../config/mqtt"
import { RequestHandler } from "express";
import { repositoryMqtt } from "../repositories/mqtt.repository";


export class mqttController {

    static valoresTemperatura: RequestHandler = (req, res, next) => {
        try{
            
            return res.status(200).json({msg: "valor recebido: " + mediaTemp})

        }catch(err){
            return err;
        }

    }

    static cadastrarValor: RequestHandler = async(req, res, next) => {

        const temperaturaCadastrada = await repositoryMqtt.createTemperatura(req.body)

        return res.status(200).json({msg: "temperatura cadastrada com sucesso: " + temperaturaCadastrada?.sensorTemperatura})


    }



}