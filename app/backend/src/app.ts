import express = require('express');
import { Request, Response, NextFunction } from 'express';
import routes from './database/routes/router';
import { AppDataSource } from "./data-source";
import { EstoqueIngrediente } from "./database/model/Ingredientes.model";
import mongoose from 'mongoose';

import Pessoa from './database/model/User.model';

import "reflect-metadata";

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  // Configurações da aplicação
  private config(): void {
    const accessControl: express.RequestHandler = (req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PUT, PATCH');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);

    this.app.use('/', routes);
  }

  // Método para iniciar o servidor
  public async start(PORT: string | number): Promise<void> {
    try {
      // Conexão com o MySQL usando TypeORM
      await AppDataSource.initialize();
      console.log('Conectado ao banco de dados MySQL com sucesso!');

      // Conexão com o MongoDB
      const mongoUri = process.env.MONGO_URI || 'mongodb://root:example@mongo:27017/mydatabase?authSource=admin';
      await mongoose.connect(mongoUri);
      console.log('Conectado ao MongoDB');

      // Inserir usuário padrão após a conexão
      // mongoose.connection.once('open', async () => {
      //   console.log('Inicializando usuário padrão...');
  
        const defaultUser = {
            cpf: '123.456.789-00',
            nome: 'João da Silva',
            email: "admin@admin.com",
            data_nascimento: "1990-01-01",
            endereco: {
              logradouro: "Rua das Flores",
              numero: 123,
              complemento: "Apt 101",
              bairro: "Centro"
            },
            telefone: "(11) 91234-5678",
            funcao: "Administrador",
            senha: "admin123"
          };
  
        const existingUser = await Pessoa.findOne({ username: defaultUser.email });
        if (!existingUser) {
          await Pessoa.create(defaultUser);
          console.log('Usuário padrão criado com sucesso!');
        } else {
          console.log('Usuário padrão já existe!');
        }
      // });

      // Iniciando o servidor Express
      this.app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
      });
      
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados', error);
      process.exit(1);  // Encerra o processo se a conexão falhar
    }
  }
}

export default App;
