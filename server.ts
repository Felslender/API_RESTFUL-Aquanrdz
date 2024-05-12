import app from './app';
import db from './src/db/configs';
import cargos from './src/model/cargos.model';
import usuarios from './src/model/user.model';
import telefones from './src/model/telefoneUser.model';
import usu_sistema from './src/model/usu_sistema.model';
import sistemas from './src/model/sistemas.model';
import sistema_valores from './src/model/sistema_valores.model';
import peixes from './src/model/peixes.model';


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


