import { Router } from 'express';
import {
    createManufacturersController,
    getAllManufacturersController,
    deleteManufacturersController
} from '../controller/Manufacturers.controller';

const router = Router();

router.post('/create', createManufacturersController);

router.get('/list', getAllManufacturersController);

// router.post('/edit', getAllEmpresasController);

router.post('/delete', deleteManufacturersController);

export default router;