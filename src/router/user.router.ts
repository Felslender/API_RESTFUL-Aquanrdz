import { Router } from 'express';
import { userController } from '../controller/user.controller'
import { controllerLogin } from '../controller/user.login.controller';
import { userMiddleware } from '../middleware/userMiddleware';

const userRouter = Router()

userRouter.post('/login', controllerLogin.login);   
userRouter.post('/user', userMiddleware.verificarCargos, userMiddleware.encontrarEmail, userController.createdUser);
userRouter.post('/sistema', userController.createSistema)

export default userRouter