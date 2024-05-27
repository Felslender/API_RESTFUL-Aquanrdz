import express from 'express';
import cors from 'cors';
import userRouter from './src/router/user.router'
import mqttRouter from './src/router/mqtt.router';
import { json } from 'express';
import sistemasRouter from './src/router/sistemas.router';


const app = express();

app.use(express())
app.use(cors())
app.use(json())

app.use(userRouter)
app.use(mqttRouter)
app.use(sistemasRouter)

export default app;