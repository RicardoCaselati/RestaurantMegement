import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import routes from './database/routes/router';
import mongoose from 'mongoose';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    
    // Não remover essa rota
    this.app.get('/', (req: Request, res: Response) => res.json({ ok: true }));
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

    // Use as rotas definidas no arquivo de rotas
    this.app.use('/', routes);  // Adicionando um prefixo para rotas
  }

  // Método para conectar ao MongoDB e iniciar o servidor
  public async start(PORT: string | number): Promise<void> {
    try {
      // Conexão ao MongoDB com autenticação
      const mongoUri = process.env.MONGO_URI || 'mongodb://root:example@mongo:27017/sistema?authSource=admin'; 
      await mongoose.connect(mongoUri);
      console.log('Conectado ao MongoDB');
  
      // Iniciando o servidor Express
      this.app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
      });
  
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB', error);
      process.exit(1);  // Encerra o processo se a conexão falhar
    }
  }
  
}

export default App;
