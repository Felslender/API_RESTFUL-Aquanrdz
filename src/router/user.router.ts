import { Router } from 'express';
import { controllerUser } from '../controller/user.controller';
import { controllerLogin } from '../controller/user.login.controller';
import { userMiddleware } from '../middleware/userMiddleware';
import { middlewarePeixe } from '../middleware/peixeMiddleware';
import { verificarCamposUser } from '../middleware/camposMiddleware';

const userRouter = Router()

userRouter.post('/login', controllerLogin.login);   
userRouter.post('/user', userMiddleware.verificarCargos, verificarCamposUser.verificarCampoVazio, userMiddleware.encontrarEmail, controllerUser.createdUser);
userRouter.get('/user', controllerUser.userInfos)

export default userRouter