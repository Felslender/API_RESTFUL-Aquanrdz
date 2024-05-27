import mqtt from 'mqtt';
import { repositoryMqtt } from '../repositories/mqtt.repository';

const client = mqtt.connect("mqtt://test.mosquitto.org");
const topicAlimentador = "4l1m3nt4d0r";
const topicTemperatura = "t3mp374tu74A68a";
var soma: number;

let temperaturaAtual: number;
let listTemp: number[] = [];
var mediaTemp: number;

client.on("connect", () => {
    client.subscribe([topicAlimentador, topicTemperatura], (err) => {
        if (err) {
            console.log("Erro ao receber dados de temperatura");
        } else {
            console.log("Dados de temperatura: conectado com sucesso!");
        }
    });
});

client.on("message", (topic, message) => {
    if (topic === topicAlimentador) {
        // console.log("alimentador: " + message.toString());
    } else if (topic === topicTemperatura) {
        const temperatureValue = parseFloat(message.toString());
        temperaturaAtual = temperatureValue;
        if (!isNaN(temperatureValue) && temperaturaAtual > 0) {
            if (listTemp.length < 10) {
                listTemp.push(temperaturaAtual);
            } else {
                listTemp.shift();
                listTemp.push(temperaturaAtual);
            }

            console.log("temperatura recebida: " + temperaturaAtual);
            soma = listTemp.reduce((acc, temp) => acc + temp, 0);
            mediaTemp = soma / listTemp.length;
        } else {
            
        }
    }
});

const registrarTemperatura = async () => {
    const temperaturaCadastrada = await repositoryMqtt.createTemperatura();
    console.log("Temperatura cadastrada com sucesso:", temperaturaCadastrada.sensorTemperatura);
};

setInterval(registrarTemperatura, 10000);

export { client, temperaturaAtual, listTemp, mediaTemp };
