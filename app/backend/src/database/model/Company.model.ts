import mongoose from 'mongoose';

const EmpresaSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Empresa', EmpresaSchema);
