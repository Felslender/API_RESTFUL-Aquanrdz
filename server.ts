// import { httpServer } from './app';
// import { app } from './app';
import app from './app'
import db from './src/config/database';
import cargos from './src/models/tableModels/cargos.model';
import usuarios from './src/models/tableModels/user.model';
import telefones from './src/models/tableModels/telefoneUser.model';
import usu_sistema from './src/models/tableModels/usu_sistema.model';
import sistemas from './src/models/tableModels/sistemas.model';
import sistema_valores from './src/models/tableModels/sistemaValores.model';
import peixes from './src/models/tableModels/peixes.model';


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










