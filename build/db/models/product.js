'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter product name'
      }
    },
    specification: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    photos: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};