import { Router } from 'express';
import { createdUser } from '../controller/user.controller'
import { userMiddleware } from '../middleware/userMiddleware';

const userRouter = Router()

userRouter.post('/user', userMiddleware.encontrarEmail ,createdUser);



export default userRouter