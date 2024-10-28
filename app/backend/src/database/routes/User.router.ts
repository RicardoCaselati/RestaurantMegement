import { Router } from 'express';
import {createUserController} from '../controller/User.controller';

const router = Router();

router.post('/create', createUserController);

// router.get('/list', createUserController);

// router.post('/edit', createUserController);

// router.post('/delete', createUserController);

export default router;