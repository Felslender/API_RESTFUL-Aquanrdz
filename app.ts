import express from 'express';
import cors from 'cors';
import userRouter from './src/router/user.router'
import {json} from 'body-parser'

const app = express();

app.use(express())
app.use(cors())
app.use(json())

app.use(userRouter)

export default app;