import { Router } from 'express';
import loginRouter from './Login.router';
import companyRouter from './Company.router';
import peopleRouter from './User.router';

const routes = Router();

// Rota de teste
routes.get('/test', (req, res) => {
    return res.status(200).json({ message: 'Sucesso' });
});

// Rota Login
routes.use('/login', loginRouter);

// Rotas Company (Supermercados e Fornecedores)
routes.use('/company', companyRouter);

// Rotas Manufacturers (Fabricantes)
routes.use('/manufacturers', companyRouter);

// Rotas Shopping Lists (Lista de Compras)
routes.use('/shopping-lists', companyRouter);

// Rotas User
routes.use('/user', peopleRouter);

export default routes;
