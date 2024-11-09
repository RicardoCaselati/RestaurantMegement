"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = __importDefault(require("../model/User.model")); // Certifique-se de que o caminho está correto
const createUserService = async (userData) => {
    try {
        const newUser = new User_model_1.default(userData);
        await newUser.save();
        return newUser;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Erro ao cadastrar empresa: ' + error.message);
        }
        else {
            throw new Error('Erro desconhecido ao cadastrar empresa');
        }
    }
};
module.exports = {
    createUserService,
};
//# sourceMappingURL=User.service.js.map