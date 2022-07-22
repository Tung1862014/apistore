'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bills', {
      idHD: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSP: {
        type: Sequelize.INTEGER
      },
      idNV: {
        type: Sequelize.INTEGER
      },
      idND: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      roles: {
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
    await queryInterface.dropTable('Bills');
  }
};