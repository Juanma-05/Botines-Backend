import { Router } from 'express';
import { createProducts, getProducts,} from '../controllers/Productos.controllers';
import { createProducts1, getProducts1 } from '../controllers/Productos1.controlles';
import { createProducts2, getProducts2 } from '../controllers/Productos2.controlles';

const router = Router();

router.post('/products', createProducts);
router.get('/products', getProducts);
router.post('/products1', createProducts1);
router.get('/products1', getProducts1);
router.post('/products2', createProducts2);
router.get('/products2', getProducts2);




export default router;