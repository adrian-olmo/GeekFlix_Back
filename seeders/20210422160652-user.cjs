'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'adri@gmail.com',
        password: '1234'
      },
      {
        email: 'ruben@gmail.com',
        password: '1234'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', 'null', {})
  }
};
