import { Router } from 'express';
import { createProducts, getProducts,} from '../controllers/Productos.controllers';
import { createProducts1, getProducts1 } from '../controllers/Productos1.controlles';
import { createProducts2, getProducts2 } from '../controllers/Productos2.controlles';

const router = Router();

router.get('/products', getProducts);
router.get('/products1', getProducts1);
router.get('/products2', getProducts2);




export default router;