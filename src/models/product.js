'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    idSP: DataTypes.INTEGER,
    idDM: DataTypes.INTEGER,
    nameProduct: DataTypes.STRING,
    image: DataTypes.STRING,
    detail: DataTypes.TEXT,
    number: DataTypes.INTEGER,
    sellNumber: DataTypes.INTEGER,
    money: DataTypes.INTEGER,
    promotion: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};