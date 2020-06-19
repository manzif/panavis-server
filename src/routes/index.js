import express from 'express';
import product  from './products';

const router = express.Router();

router.use('/api/product', product);

export default router;