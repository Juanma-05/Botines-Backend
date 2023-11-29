import {Router} from 'express';
import {login} from '../controllers/Login.controllers'

const router = Router();

router.post('/login', login)


export default router;