export interface ManufacturersData {
    cnpj: string;
    razao_social?: string;
    nome_fantasia: string;
    endereco: {
      logradouro: string;
      numero: number;
      complemento?: string;
      bairro: string;
    };
    telefone?: string;
    responsavel?: {
      nome?: string;
      telefone?: string;
      cpf?: string;
    };
    criado_em?: Date;
    ultima_alteracao?: Date;
    excluido_em?: Date | null;
  }
  