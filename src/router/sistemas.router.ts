import { Router } from 'express';
import { controllerSistema } from '../controller/sistemas.controller';
import { middlewarePeixe } from '../middleware/peixeMiddleware';
import { userMiddleware } from '../middleware/userMiddleware';


const sistemasRouter = Router()


sistemasRouter.get('/peixes', controllerSistema.allPeixes)
sistemasRouter.get('/sistemas', controllerSistema.sistemasUsuario)
sistemasRouter.post('/sistema', middlewarePeixe.createPeixe, userMiddleware.verificarAcesso, controllerSistema.createSistema)

export default sistemasRouter