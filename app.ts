import express from 'express';
import cors from 'cors';
import userRouter from './src/router/user.router';
import mqttRouter from './src/router/mqtt.router';
import { json } from 'express';
import sistemasRouter from './src/router/sistemas.router';
import { createServer } from 'http';
import { Server } from 'socket.io';
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

io.on("connection", (socket) => {
  console.log(`connection in ${socket.id}`);

  socket.on("front", (message) => {
    console.log(`connection teste: ${message}`);
  });

  function dados() {
      var tempAtual = temperaturaAtual
      // console.log(`temperatura que esta retornando do socket: ${tempAtual}°C`)
      return socket.emit("valores", tempAtual);
  }

  const registrarTemperatura = async () => {
      const temperaturaCadastrada = await repositoryMqtt.createTemperatura();
      console.log("Temperatura cadastrada com sucesso:", temperaturaCadastrada.sensorTemperatura);
      return temperaturaCadastrada.sensorTemperatura
  };

  setInterval(dados, 1000);
  setInterval(registrarTemperatura, 15000);

});

httpServer.listen(3333, () => {
  console.log(`mqtt server listening on 3333`);
})



export default app;
