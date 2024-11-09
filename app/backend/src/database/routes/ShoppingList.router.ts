import { Router } from 'express';
import { getAllShoppingListController } from '../controller/ShoppingList.controller';

const router = Router();

router.get('/list', getAllShoppingListController);

// router.post('/edit', getAllEmpresasController);

// router.post('/delete', deleteEmpresaController);

export default router;
