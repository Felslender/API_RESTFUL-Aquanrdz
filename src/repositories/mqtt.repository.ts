
import { sistema_valores } from "../models/infos.model";
import sistema_valores_tabela from "../models/tableModels/sistemaValores.model";


import { temperaturaAtual, listTemp, mediaTemp} from "../config/mqtt";


export class repositoryMqtt {
    static createTemperatura = async () => {
        
        console.log(listTemp);
        console.log(mediaTemp);

        const newTemperatura = (await sistema_valores_tabela.create({
            id_sistema: 1,
            sensorTemperatura: mediaTemp,
            sensorPh: "0"
        })) as sistema_valores;

        return newTemperatura;
    }
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











