"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bcrypt = __importStar(require("bcryptjs"));
// Definindo o esquema Pessoa
const PessoaSchema = new mongoose_1.Schema({
    cpf: { type: String, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    data_nascimento: { type: Date, required: true },
    endereco: {
        logradouro: { type: String, required: true },
        numero: { type: Number, required: true },
        complemento: { type: String },
        bairro: { type: String, required: true }
    },
    telefone: { type: String, required: true },
    funcao: { type: String, required: true },
    senha: { type: String, required: true },
    criado: { type: Date, default: Date.now },
    ultima_alteracao: { type: Date, default: Date.now },
    excluido_em: { type: Date, default: null }
});
// Middleware para atualizar o campo 'ultima_alteracao' antes de salvar
PessoaSchema.pre('save', function (next) {
    this.ultima_alteracao = new Date(); // Atualiza com a data atual
    next();
});
// Middleware para criptografar a senha antes de salvar no banco de dados
PessoaSchema.pre('save', async function (next) {
    if (this.isModified('senha') || this.isNew) {
        const salt = await bcrypt.genSalt(10); // Gerando o salt
        this.senha = await bcrypt.hash(this.senha, salt); // Criptografando a senha
    }
    next();
});
// Método para comparar senhas
PessoaSchema.methods.comparePassword = async function (senhaDigitada) {
    return await bcrypt.compare(senhaDigitada, this.senha);
};
// Exportando o modelo como padrão
const Pessoa = mongoose_1.default.model('Pessoa', PessoaSchema);
exports.default = Pessoa;
//# sourceMappingURL=User.model.js.map