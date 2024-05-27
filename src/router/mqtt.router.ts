import { Router } from 'express';

import mqtt from 'mqtt/*';
import { controllerMqtt } from '../controller/mqtt.controller';


const mqttRouter = Router()


mqttRouter.get('/apiMqtt', controllerMqtt.valoresTemperatura)
mqttRouter.post('/apiMqtt', controllerMqtt.cadastrarValor)




export default mqttRouter;