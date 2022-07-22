'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Staff.init({
    idNV: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    cmnd: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    roles: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};