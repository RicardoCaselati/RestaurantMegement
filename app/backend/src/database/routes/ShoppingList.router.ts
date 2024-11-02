import { Router } from 'express';
import {createCompanyController, getAllEmpresasController, deleteEmpresaController} from '../controller/Company.controller';

const router = Router();

router.post('/create', createCompanyController);

router.get('/list', getAllEmpresasController);

// router.post('/edit', getAllEmpresasController);

router.post('/delete', deleteEmpresaController);

export default router;