'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistical extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Statistical.init({
    idTK: DataTypes.INTEGER,
    order: DataTypes.INTEGER,
    turnover: DataTypes.INTEGER,
    sellNumber: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Statistical',
  });
  return Statistical;
};