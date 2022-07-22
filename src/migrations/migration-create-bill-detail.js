'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BillDetails', {
      idHDCT: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idHD: {
        type: Sequelize.INTEGER
      },
      nameProduct: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },
      money: {
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BillDetails');
  }
};