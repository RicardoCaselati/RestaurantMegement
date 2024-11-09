import { Router } from 'express';
import { createIngredientesController } from '../controller/Ingredientes.controller';

const router = Router();

router.post('/create', createIngredientesController);

// router.get('/list', getAllEmpresasController);

// router.post('/edit', getAllEmpresasController);

// router.post('/delete', deleteEmpresaController);

export default router;
