'use strict';

module.exports = {
  // firstName: DataTypes.STRING,
  //   lastName: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   password: DataTypes.STRING,
  //   address: DataTypes.STRING,
  //   phone: DataTypes.INTEGER,
  //   roleid: DataTypes.STRING,
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Tung',
      lastName: 'Nguyen',
      email: 'tuinha1862014@gmail.com',
      password: '123456',
      address: 'An giang',
      phone: '0123456789',
      roleid: 'A',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
