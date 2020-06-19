export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
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
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};