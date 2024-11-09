"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = __importDefault(require("./database/routes/router"));
const data_source_1 = require("./data-source"); // Caminho correto para o seu arquivo de configuração do TypeORM
require("reflect-metadata");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    // Configurações da aplicação
    config() {
        const accessControl = (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PUT, PATCH');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
        // Use as rotas definidas no arquivo de rotas
        this.app.use('/', router_1.default); // Adicionando um prefixo para rotas
    }
    // Método para iniciar o servidor
    async start(PORT) {
        try {
            // Iniciando a conexão com o banco de dados usando TypeORM
            await data_source_1.AppDataSource.initialize();
            console.log('Conectado ao banco de dados com sucesso!');
            // Iniciando o servidor Express
            this.app.listen(PORT, () => {
                console.log(`Servidor rodando na porta ${PORT}`);
            });
        }
        catch (error) {
            console.error('Erro ao conectar ao banco de dados', error);
            process.exit(1); // Encerra o processo se a conexão falhar
        }
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map