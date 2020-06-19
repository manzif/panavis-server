'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../db/models');

var _models2 = _interopRequireDefault(_models);

var _cloudinary = require('../middleware/cloudinary');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _imageDataUri = require('image-data-uri');

var _imageDataUri2 = _interopRequireDefault(_imageDataUri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = _models2.default.Product;

var Products = function () {
  function Products() {
    _classCallCheck(this, Products);
  }

  _createClass(Products, null, [{
    key: 'addProduct',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var images, image, dataBuffer, mediaType, imageData, uploadedImage, _req$body, name, specification, description, price, photos, product;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                images = [];
                _context.t0 = regeneratorRuntime.keys(req.files);

              case 3:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 14;
                  break;
                }

                image = _context.t1.value;
                dataBuffer = new Buffer.from(req.files[image].buffer);
                mediaType = _path2.default.extname(req.files[image].originalname).toString();
                imageData = _imageDataUri2.default.encode(dataBuffer, mediaType);
                _context.next = 10;
                return _cloudinary.uploader.upload(imageData);

              case 10:
                uploadedImage = _context.sent;

                images.push(uploadedImage.url);
                _context.next = 3;
                break;

              case 14:
                _req$body = req.body, name = _req$body.name, specification = _req$body.specification, description = _req$body.description, price = _req$body.price;
                photos = images;
                _context.next = 18;
                return Product.create({
                  name: name, specification: specification, description: description, price: price, photos: photos
                });

              case 18:
                product = _context.sent;
                return _context.abrupt('return', res.status(201).send({
                  success: true,
                  message: 'Product added'
                }));

              case 22:
                _context.prev = 22;
                _context.t2 = _context['catch'](0);
                return _context.abrupt('return', res.status(500).send({
                  message: 'Server error',
                  error: _context.t2
                }));

              case 25:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 22]]);
      }));

      function addProduct(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return addProduct;
    }()
  }, {
    key: 'getProduct',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var productId, product;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                productId = req.params.productId;
                _context2.next = 4;
                return Product.findOne({
                  where: { id: productId },
                  attributes: ['name', 'specification', 'description', 'price', 'photos']
                });

              case 4:
                product = _context2.sent;

                if (!product) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt('return', res.status(200).json({ product: product }));

              case 7:
                return _context2.abrupt('return', res.status(404).json({ error: 'product not found' }));

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);
                return _context2.abrupt('return', res.status(500).send({
                  message: 'Server error'
                }));

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function getProduct(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return getProduct;
    }()
  }]);

  return Products;
}();

exports.default = Products;