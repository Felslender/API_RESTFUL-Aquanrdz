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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = __importDefault(require("./src/router/user.router"));
const mqtt_router_1 = __importDefault(require("./src/router/mqtt.router"));
const express_2 = require("express");
const sistemas_router_1 = __importDefault(require("./src/router/sistemas.router"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const mqtt_1 = require("./src/config/mqtt");
const mqtt_repository_1 = require("./src/repositories/mqtt.repository");
// import { funcTempAtual, funcMediaTemp } from './src/config/mqtt';
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_2.json)());
app.use(user_router_1.default);
app.use(mqtt_router_1.default);
app.use(sistemas_router_1.default);
const appMqtt = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(appMqtt);
appMqtt.use((0, cors_1.default)({ origin: '*' }));
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
    },
});
function dados(socket) {
    var tempAtual = mqtt_1.temperaturaAtual;
    console.log(`temperatura que esta retornando do socket: ${tempAtual}°C`);
    return socket.emit("valores", `Temperatura em: ${tempAtual}°C`);
}
function ultimos_dados(socket) {
    var dadosCadastrados = mqtt_repository_1.repositoryMqtt.getLastRegisters();
    console.log(`ultimos 6 registros: ${dadosCadastrados}`);
    return socket.emit(`${dadosCadastrados}`);
}
const registrarTemperatura = () => __awaiter(void 0, void 0, void 0, function* () {
    const temperaturaCadastrada = yield mqtt_repository_1.repositoryMqtt.createTemperatura();
    console.log("Temperatura cadastrada com sucesso:", temperaturaCadastrada.sensorTemperatura);
    return temperaturaCadastrada.sensorTemperatura;
});
const onDataHandlers = {};
const onRegisterHandlers = {};
const lastRegisters = {};
io.on("connection", (socket) => {
    const { id } = socket;
    console.log(`connection in ${id}`);
    socket.on("front", (message) => {
        console.log(`connection teste: ${message}`);
    });
    socket.on('disconnect', function () {
        delete onDataHandlers[id];
        delete onRegisterHandlers[id];
    });
    onDataHandlers[id] = () => { dados(socket); };
    lastRegisters[id] = () => { ultimos_dados(socket); };
    onRegisterHandlers[id] = () => { registrarTemperatura(); };
    //teste
});
setInterval(() => {
    for (const cb of Object.values(onDataHandlers)) {
        cb();
    }
}, 1000);
setInterval(() => {
    for (const cb of Object.values(onRegisterHandlers)) {
        cb();
    }
}, 15000);
setInterval(() => {
    for (const cb of Object.values(lastRegisters)) {
        cb();
    }
}, 16000);
httpServer.listen(3333, () => {
    console.log(`mqtt server listening on 3333`);
});
exports.default = app;
