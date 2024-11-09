"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_router_1 = __importDefault(require("./Login.router"));
const Company_router_1 = __importDefault(require("./Company.router"));
const Manufacturers_router_1 = __importDefault(require("./Manufacturers.router"));
const User_router_1 = __importDefault(require("./User.router"));
const routes = (0, express_1.Router)();
// Rota de teste
routes.get('/test', (req, res) => {
    return res.status(200).json({ message: 'Sucesso' });
});
// Rota Login
routes.use('/login', Login_router_1.default);
// Rotas Company (Supermercados e Fornecedores)
routes.use('/company', Company_router_1.default);
// Rotas Manufacturers (Fabricantes)
routes.use('/manufacturers', Manufacturers_router_1.default);
// Rotas Shopping Lists (Lista de Compras)
routes.use('/shopping-lists', Company_router_1.default);
// Rotas User
routes.use('/user', User_router_1.default);
exports.default = routes;
//# sourceMappingURL=router.js.map