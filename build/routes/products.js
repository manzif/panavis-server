'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _products = require('../controllers/products');

var _products2 = _interopRequireDefault(_products);

var _multer = require('../middleware/multer');

var _cloudinary = require('../middleware/cloudinary');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = _express2.default.Router();

route.use('*', _cloudinary.cloudinaryConfig);
route.post('/', _multer.multerUploads, _products2.default.addProduct);
route.get('/:productId', _products2.default.getProduct);

exports.default = route;