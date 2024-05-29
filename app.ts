import express from 'express';
import cors from 'cors';
import userRouter from './src/router/user.router'
import mqttRouter from './src/router/mqtt.router';
import { json } from 'express';
import sistemasRouter from './src/router/sistemas.router';
import { createServer } from "http";
import { Server } from "socket.io";


const app = express();

app.use(express())
app.use(cors())
app.use(json())

app.use(userRouter)
app.use(mqttRouter)
app.use(sistemasRouter)



const appMqtt = express();
const httpServer = createServer(appMqtt);

app.use(cors({ origin: "*" }));
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});


io.on("connection", (socket) => {
  console.log(`connection in ${socket.id}`);

  socket.on("front", (message) => {
    console.log(`connection teste: ${message}`);
  });

  function dados() {
    return socket.emit("valores", `Temperatura em: ${Math.floor(Math.random() * 51)}°C`);
  }
  setInterval(dados, 3000);
});

httpServer.listen(3333,()=>{console.log(`mqtt server listening on 3333`);
})


export default app;