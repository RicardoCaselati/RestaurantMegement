"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const User_model_1 = __importDefault(require("../model/User.model"));
const LoginService = async (loginData) => {
    try {
        const user = await User_model_1.default.findOne({ email: loginData.usuario });
        if (!user) {
            return { success: false, message: 'Usuário não encontrado' };
        }
        const passwordMatch = await user.comparePassword(loginData.senha);
        if (!passwordMatch) {
            return { success: false, message: 'Senha incorreta' };
        }
        return { success: true, message: 'Login realizado com sucesso!' };
    }
    catch (error) {
        console.error('Erro ao fazer Login:', error);
        if (error instanceof Error) {
            return { success: false, message: error.message };
        }
        return { success: false, message: 'Ocorreu um erro desconhecido ao fazer login' };
    }
};
exports.LoginService = LoginService;
//# sourceMappingURL=Login.service.js.map