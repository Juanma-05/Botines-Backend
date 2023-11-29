import { Router } from 'express';
import { createUser, getUsers } from '../controllers/user.controllers'

const router = Router();

router.post('/users', createUser);
router.post('/login', getUsers);


export default router;