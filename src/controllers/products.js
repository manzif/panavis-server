import model from '../db/models';
import { uploader } from '../middleware/cloudinary';
import path from 'path';
import imageDataURI from 'image-data-uri';

const { Product } = model;

class Products {
  static async addProduct(req, res) {
    try {
      const images = [];
      for (let image in req.files) {
        const dataBuffer = new Buffer.from(req.files[image].buffer);
        const mediaType = path.extname(req.files[image].originalname).toString();

        const imageData = imageDataURI.encode(dataBuffer, mediaType);
        const uploadedImage = await uploader.upload(imageData);
        images.push(uploadedImage.url);
      }

      const { name, specification, description, price } = req.body;
      const photos = images;
      const product = await Product.create({
        name, specification, description, price, photos
      });
      return res.status(201).send({
        success: true,
        message: 'Product added'
      });
    } catch (error) {
      return res.status(500).send({
        message: 'Server error',
        error
      });
    }
  }

  static async getProduct(req, res) {
    try {
      const { productId } = req.params;
      const product = await Product.findOne({
        where: { id: productId },
        attributes: ['name', 'specification', 'description', 'price', 'photos']
      });
      if (product) return res.status(200).json({ product: product });
      return res.status(404).json({ error: 'product not found' });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: 'Server error'
      });
    }
  }
}

export default Products;