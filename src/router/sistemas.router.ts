import { Router } from 'express';
import { sistemasController } from '../controller/sistemas.controller';
import { middlewarePeixe } from '../middleware/peixeMiddleware';
import { userMiddleware } from '../middleware/userMiddleware';


const sistemasRouter = Router()


sistemasRouter.get('/peixes', sistemasController.allPeixes)
sistemasRouter.get('/sistemas', sistemasController.sistemasUsuario)
sistemasRouter.post('/sistema', middlewarePeixe.createPeixe, userMiddleware.verificarAcesso, sistemasController.createSistema)

export default sistemasRouter