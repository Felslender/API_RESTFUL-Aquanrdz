import express from 'express';
import cors from 'cors';
import userRouter from './src/router/user.router'
import mqttRouter from './src/router/mqtt.router';
import { json } from 'express';


const app = express();

app.use(express())
app.use(cors())
app.use(json())

app.use(userRouter)
app.use(mqttRouter)

export default app;