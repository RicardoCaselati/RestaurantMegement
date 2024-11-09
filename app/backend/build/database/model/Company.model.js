"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EmpresaSchema = new mongoose_1.default.Schema({
    cnpj: { type: String, required: true },
    razao_social: { type: String, required: true },
    nome_fantasia: { type: String, required: true },
    endereco: {
        logradouro: { type: String, required: true },
        numero: { type: Number, required: true },
        complemento: { type: String },
        bairro: { type: String, required: true }
    },
    telefone: { type: String, required: false },
    responsavel: {
        nome: { type: String, required: false },
        telefone: { type: String, required: false },
        cpf: { type: String, required: false }
    },
    criado_em: { type: Date, default: Date.now },
    ultima_alteracao: { type: Date },
    excluido_em: { type: Date, default: null }
});
module.exports = mongoose_1.default.model('Empresa', EmpresaSchema);
//# sourceMappingURL=Company.model.js.map