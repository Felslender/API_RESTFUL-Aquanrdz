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

    static cadastrarValor: RequestHandler = async (req, res, next) => {
        const infoMqtt = req.body;

        const registrarTemperatura = async () => {
            const temperaturaCadastrada = await repositoryMqtt.createTemperatura(infoMqtt);
            console.log("Temperatura cadastrada com sucesso:", temperaturaCadastrada.sensorTemperatura);
        };

        setInterval(registrarTemperatura, 5000);

        res.status(200).json({ msg: "Registro de temperatura iniciado a cada 5 segundos." });
    }

}