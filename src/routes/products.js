import express from 'express';
import products from '../controllers/products';
import { multerUploads } from '../middleware/multer';
import { cloudinaryConfig } from '../middleware/cloudinary';


const route = express.Router();

route.use('*', cloudinaryConfig);
route.post('/', multerUploads, products.addProduct);
route.get('/:productId', products.getProduct);

export default route;