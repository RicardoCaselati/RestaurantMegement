import { Router } from 'express';
import { createIngredientesController, getAllIngredienteController } from '../controller/Ingredientes.controller';

const router = Router();

router.post('/create', createIngredientesController);

router.get('/list', getAllIngredienteController);

// router.post('/edit', getAllEmpresasController);

// router.post('/delete', deleteEmpresaController);

export default router;
