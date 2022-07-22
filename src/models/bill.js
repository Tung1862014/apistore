'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bill.init({
    idHD: DataTypes.INTEGER,
    idSP: DataTypes.INTEGER,
    idNV: DataTypes.INTEGER,
    idND: DataTypes.INTEGER,
    address: DataTypes.STRING,
    roles: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};