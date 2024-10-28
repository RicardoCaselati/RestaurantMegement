import mongoose, { Document, Schema } from 'mongoose';
import { PessoaData } from '../Interface/People.interface';
import * as bcrypt from 'bcryptjs';

// Interface que inclui o método comparePassword
export interface PessoaDocument extends PessoaData, Document {
  comparePassword(senhaDigitada: string): Promise<boolean>;
}

// Definindo o esquema Pessoa
const PessoaSchema: Schema<PessoaDocument> = new Schema({
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
PessoaSchema.pre<PessoaDocument>('save', function (next) {
  this.ultima_alteracao = new Date(); // Atualiza com a data atual
  next();
});

// Middleware para criptografar a senha antes de salvar no banco de dados
PessoaSchema.pre<PessoaDocument>('save', async function (next) {
  if (this.isModified('senha') || this.isNew) {
    const salt = await bcrypt.genSalt(10); // Gerando o salt
    this.senha = await bcrypt.hash(this.senha, salt); // Criptografando a senha
  }
  next();
});

// Método para comparar senhas
PessoaSchema.methods.comparePassword = async function (senhaDigitada: string): Promise<boolean> {
  return await bcrypt.compare(senhaDigitada, this.senha);
};

// Exportando o modelo como padrão
const Pessoa = mongoose.model<PessoaDocument>('Pessoa', PessoaSchema);
export default Pessoa;
