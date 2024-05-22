import { Router } from 'express';
import { mqttController } from '../controller/mqtt.controller';
import mqtt from 'mqtt/*';


const mqttRouter = Router()


mqttRouter.get('/apiMqtt', mqttController.valoresTemperatura)
mqttRouter.post('/apiMqtt', mqttController.cadastrarValor)




export default mqttRouter;