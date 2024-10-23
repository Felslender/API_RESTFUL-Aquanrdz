"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { httpServer } from './app';
// import { app } from './app';
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./src/config/database"));
const cargos_model_1 = __importDefault(require("./src/models/tableModels/cargos.model"));
const user_model_1 = __importDefault(require("./src/models/tableModels/user.model"));
const telefoneUser_model_1 = __importDefault(require("./src/models/tableModels/telefoneUser.model"));
const usu_sistema_model_1 = __importDefault(require("./src/models/tableModels/usu_sistema.model"));
const sistemas_model_1 = __importDefault(require("./src/models/tableModels/sistemas.model"));
const sistemaValores_model_1 = __importDefault(require("./src/models/tableModels/sistemaValores.model"));
const peixes_model_1 = __importDefault(require("./src/models/tableModels/peixes.model"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    cargos_model_1.default;
    user_model_1.default;
    telefoneUser_model_1.default;
    sistemas_model_1.default;
    peixes_model_1.default;
    usu_sistema_model_1.default;
    sistemaValores_model_1.default;
    yield database_1.default.sync();
}))();
app_1.default.listen(3000, () => {
    console.log('listening on port 3000');
});
