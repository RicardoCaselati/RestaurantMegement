"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Ingredientes_model_1 = require("./database/model/Ingredientes.model");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "sua_senha",
    database: "seu_banco_de_dados",
    synchronize: true,
    logging: true,
    entities: [Ingredientes_model_1.EstoqueIngrediente],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map