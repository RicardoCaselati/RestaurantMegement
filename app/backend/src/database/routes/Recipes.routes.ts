import { Router } from 'express';
import {recipesController} from '../controller/Recipes.controller';

const router = Router();

router.post('/create', recipesController);

// router.get('/list', createUserController);

// router.post('/edit', createUserController);

// router.post('/delete', createUserController);

export default router;