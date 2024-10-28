import { Document } from 'mongoose';

interface Endereco {
  logradouro: string;
  numero: number;
  complemento?: string;
  bairro: string;
}

// Atualize para estender 'Document'
export interface PessoaData extends Document {
  cpf: string;
  nome: string;
  email: string;
  data_nascimento: Date;
  endereco: Endereco;
  telefone: string;
  funcao: string;
  senha: string;
  criado: Date;
  ultima_alteracao: Date;
  excluido_em?: Date | null;
}
