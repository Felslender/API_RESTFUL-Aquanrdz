import app from './app';
import db from './src/config/database';
import cargos from './src/models/tableModels/cargos.model';
import usuarios from './src/models/tableModels/user.model';
import telefones from './src/models/tableModels/telefoneUser.model';
import usu_sistema from './src/models/tableModels/usu_sistema.model';
import sistemas from './src/models/tableModels/sistemas.model';
import sistema_valores from './src/models/tableModels/sistemaValores.model';
import peixes from './src/models/tableModels/peixes.model';
import mqtt from 'mqtt';



(async () => {
    cargos
    usuarios
    telefones
    sistemas
    peixes
    usu_sistema
    sistema_valores
    await db.sync();
})();




app.listen(3000, () => {
    console.log('listening on port 3000')
})


// const client = mqtt.connect("mqtt://test.mosquitto.org") //conectando com o broker
// const topicAlimentador = "4l1m3nt4d0r"
// const topicTemperatura= "t3mp374tu74A68a"


// // recebe o topico
// client.on("connect", () => {
//         client.subscribe([topicAlimentador, topicTemperatura], (err) => {
//         if (err) {
//         console.log("Erro ao receber dados de temperatura");
//         }
//         console.log("Dados de temperatura: conectado com sucesso!")
//     });
// });


// client.on("message", (topic, message) => {
//     if (topic === topicAlimentador) {
//         console.log("alimentador: " + message.toString());
//     } else if (topic === topicTemperatura) {
//         console.log("temperatura: " + message.toString());
//     }
// });
