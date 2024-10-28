import { Router } from 'express';
import { loginController } from '../controller/Login.controller';

const router = Router();

router.post('/', loginController); 

export default router;
