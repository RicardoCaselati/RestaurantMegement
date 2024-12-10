import { Router } from 'express';
import loginRouter from './Login.router';
import companyRouter from './Company.router';
import manufacturersRouter from './Manufacturers.router';
import peopleRouter from './User.router';
import ingredientes from './Ingredientes.router';
import shoppingLists from './ShoppingList.router';
import recipes from './Recipes.routes';

const routes = Router();

// Rota de teste
// routes.get('/test', (req, res) => {
//     return res.status(200).json({ message: 'Sucesso' });
// });

// Rota Login
routes.use('/login', loginRouter);

// Rotas Company (Supermercados e Fornecedores)
routes.use('/company', companyRouter);

// Rotas Manufacturers (Fabricantes)
routes.use('/manufacturers', manufacturersRouter);

// Rotas Shopping Lists (Lista de Compras)
routes.use('/shopping-lists', shoppingLists);

// Rotas Ingredients
routes.use('/shopping-lists-ingredients', ingredientes);

// Rotas Recipes
routes.use('/recipes', recipes);

// Rotas User
routes.use('/user', peopleRouter);

export default routes;
