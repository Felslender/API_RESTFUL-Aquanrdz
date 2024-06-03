// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import { temperaturaAtual } from '../config/mqtt';
// import { repositoryMqtt } from '../repositories/mqtt.repository';
// import cors from 'cors';


// const appMqtt = express();
// const httpServer = createServer(appMqtt);

// appMqtt.use(cors({ origin: '*' }));

// const io = new Server(httpServer, {
//   cors: {
//     origin: '*',
//   },
// });


// io.on("connection", (socket) => {
//   console.log(`connection in ${socket.id}`);

//   socket.on("front", (message) => {
//     console.log(`connection teste: ${message}`);
//   });

//   function dados() {
//       console.log(`temperatura que esta retornando do socket: ${temperaturaAtual}°C`)
//       return socket.emit("valores", `Temperatura em: ${temperaturaAtual}°C`);
//   }

//   const registrarTemperatura = async () => {
//       const temperaturaCadastrada = await repositoryMqtt.createTemperatura();
//       console.log("Temperatura cadastrada com sucesso:", temperaturaCadastrada.sensorTemperatura);
//       return socket.emit(temperaturaCadastrada.sensorTemperatura)
//   };

//   setInterval(dados, 3000);
//   setInterval(registrarTemperatura, 3000);

// });

// httpServer.listen(3333, () => {
//   console.log(`mqtt server listening on 3333`);
// })
