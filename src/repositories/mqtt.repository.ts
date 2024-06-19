
import { sistema_valores } from "../models/infos.model";
import sistema_valores_tabela from "../models/tableModels/sistemaValores.model";


import { temperaturaAtual, listTemp, mediaTemp} from "../config/mqtt";
// import { funcMediaTemp, funcTempAtual } from "../config/mqtt";

export class repositoryMqtt {
    static createTemperatura = async () => {
        
        console.log(listTemp);
        console.log(mediaTemp);

        const newTemperatura = (await sistema_valores_tabela.create({
            id_sistema: 1,
            sensorTemperatura: temperaturaAtual,
            sensorPh: "0"
        })) as sistema_valores;

        return newTemperatura;
    }

    static getLastRegisters = async () => {
        try {
            const registros = await sistema_valores_tabela.findAll({
                attributes: ['id_valores', 'sensorTemperatura', 'dataAtivacao', 'horaAtivacao'],
                limit: 6,
                order: [['id_valores', 'DESC']],
                raw: true // Adiciona esta opção para retornar objetos simples em vez de instâncias de modelos Sequelize
            });
    
            console.log('Ultimos 6 registros:', registros);
    
            return registros;
        } catch (error) {
            console.error('Error fetching last registers:', error);
            throw error;
        }
    };

}
// export class repositoryMqtt {
//     static createTemperatura = async (infoMqtt: sistema_valores) => {
//         const { id_sistema } = infoMqtt;

//         console.log(listTemp);
//         console.log(mediaTemp);

//         const newTemperatura = (await sistema_valores_tabela.create({
//             id_sistema: id_sistema,
//             sensorTemperatura: mediaTemp,
//             sensorPh: "0"
//         })) as sistema_valores;

//         return newTemperatura;
//     }
// }











