import app from './app';
import db from './src/config/database';
import cargos from './src/models/cargos.model';
import usuarios from './src/models/user.model';
import telefones from './src/models/telefoneUser.model';
import usu_sistema from './src/models/usu_sistema.model';
import sistemas from './src/models/sistemas.model';
import sistema_valores from './src/models/sistema_valores.model';
import peixes from './src/models/peixes.model';


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


