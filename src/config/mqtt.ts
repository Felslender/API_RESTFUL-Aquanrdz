import mqtt from 'mqtt';


const client = mqtt.connect("mqtt://test.mosquitto.org");
const topicAlimentador = "4l1m3nt4d0r";
const topicTemperatura = "t3mp374tu74A68a";


let temperaturaAtual: number | null = null;


client.on("connect", () => {
    client.subscribe([topicAlimentador, topicTemperatura], (err) => {
        if (err) {
            console.log("Erro ao receber dados de temperatura");
        }
        console.log("Dados de temperatura: conectado com sucesso!");
    });
});

client.on("message", async (topic, message) => {
    if (topic === topicAlimentador) {
        // console.log("alimentador: " + message.toString());
    } else if (topic === topicTemperatura) {
        const temperatureValue = parseFloat(message.toString());
        if (!isNaN(temperatureValue)) {
            temperaturaAtual = temperatureValue
            console.log("temperatura recebida com sucesso: " + temperaturaAtual)
        }
    }
});


export {client, temperaturaAtual}