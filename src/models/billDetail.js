'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BillDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BillDetail.init({
    idHDCT: DataTypes.INTEGER,
    idHD: DataTypes.INTEGER,
    nameProduct: DataTypes.STRING,
    number: DataTypes.INTEGER,
    money: DataTypes.INTEGER,
    method: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BillDetail',
  });
  return BillDetail;
};