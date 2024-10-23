import express from 'express';
import cors from 'cors';
import userRouter from './src/router/user.router';
import mqttRouter from './src/router/mqtt.router';
import { json } from 'express';
import sistemasRouter from './src/router/sistemas.router';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { temperaturaAtual } from './src/config/mqtt';
import { repositoryMqtt } from './src/repositories/mqtt.repository';
// import { funcTempAtual, funcMediaTemp } from './src/config/mqtt';

const app = express();

app.use(cors());
app.use(json());

app.use(userRouter);
app.use(mqttRouter);
app.use(sistemasRouter);
const appMqtt = express();
const httpServer = createServer(appMqtt);

appMqtt.use(cors({ origin: '*' }));

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

function dados(socket: Socket) {
  var tempAtual = temperaturaAtual
  console.log(`temperatura que esta retornando do socket: ${tempAtual}°C`)
  return socket.emit("valores", `Temperatura em: ${tempAtual}°C`);
}

function ultimos_dados(socket: Socket){
  var dadosCadastrados = repositoryMqtt.getLastRegisters()
  console.log(`ultimos 6 registros: ${dadosCadastrados}`)
  return socket.emit(`${dadosCadastrados}` )
}

const registrarTemperatura = async () => {
  const temperaturaCadastrada = await repositoryMqtt.createTemperatura();
  console.log("Temperatura cadastrada com sucesso:", temperaturaCadastrada.sensorTemperatura);
  return temperaturaCadastrada.sensorTemperatura
};

const onDataHandlers: { [id: string]: () => void } = {}
const onRegisterHandlers: { [id: string]: () => void } = {}
const lastRegisters: { [id: string]: () => void } = {}

io.on("connection", (socket) => {
  const { id } = socket;
  console.log(`connection in ${id}`);

  socket.on("front", (message) => {
    console.log(`connection teste: ${message}`);
  });
  socket.on('disconnect', function () {
    delete onDataHandlers[id]
    delete onRegisterHandlers[id]
  });
  onDataHandlers[id] = () => { dados(socket) }
  lastRegisters[id] = () => { ultimos_dados(socket) }
  onRegisterHandlers[id] = () => { registrarTemperatura() }


//teste

});

setInterval(() => {
  for (const cb of Object.values(onDataHandlers)) {
    cb()
  }
}, 1000);

setInterval(() => {
  for (const cb of Object.values(onRegisterHandlers)) {
    cb()
  }
}, 15000);

setInterval(() => {
  for (const cb of Object.values(lastRegisters)) {
    cb()
  }
}, 16000);

httpServer.listen(3333, () => {
  console.log(`mqtt server listening on 3333`);
})



export default app;
