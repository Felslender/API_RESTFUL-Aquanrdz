import { Router } from 'express';
import { sistemasController } from '../controller/sistemas.controller';


const sistemasRouter = Router()


sistemasRouter.get('/peixes', sistemasController.allPeixes)
sistemasRouter.get('/sistemas', sistemasController.sistemasUsuario)

export default sistemasRouter