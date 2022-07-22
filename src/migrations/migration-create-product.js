'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      idSP: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idDM: {
        type: Sequelize.INTEGER
      },
      nameProduct: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.TEXT
      },
      number: {
        type: Sequelize.INTEGER
      },
      sellNumber: {
        type: Sequelize.INTEGER
      },
      money: {
        type: Sequelize.INTEGER
      },
      promotion: {
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
    await queryInterface.dropTable('Products');
  }
};