'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uploader = exports.cloudinaryConfig = undefined;

var _cloudinary = require('cloudinary');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var cloudinaryConfig = function cloudinaryConfig(req, res, next) {
    (0, _cloudinary.config)({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    next();
};

exports.cloudinaryConfig = cloudinaryConfig;
exports.uploader = _cloudinary.uploader;