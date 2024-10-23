// import { httpServer } from './app';
// import { app } from './app';
import app from '../src/app'
import db from './config/database';
import cargos from './models/tableModels/cargos.model';
import usuarios from './models/tableModels/user.model';
import telefones from './models/tableModels/telefoneUser.model';
import usu_sistema from './models/tableModels/usu_sistema.model';
import sistemas from './models/tableModels/sistemas.model';
import sistema_valores from './models/tableModels/sistemaValores.model';
import peixes from './models/tableModels/peixes.model';


(async () => {
    cargos
    usuarios
    telefones
    sistemas
    peixes
    usu_sistema
    sistema_valores
    await db.sync();
})();



app.listen(3000, () => {
    console.log('listening on port 3000')
})










