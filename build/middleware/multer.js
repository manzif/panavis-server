'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multerUploads = undefined;

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = _multer2.default.memoryStorage();

var multerUploads = (0, _multer2.default)({ storage: storage }).array('photos', 12);

exports.multerUploads = multerUploads;