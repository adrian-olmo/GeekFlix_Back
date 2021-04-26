'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'adri@gmail.com',
        password: '1234',
        role: 'user'
      },
      {
        email: 'ruben@gmail.com',
        password: '1234',
        role: 'user'
      },
      {
        email: 'admin@gmail.com',
        password: '1234',
        role: 'admin'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', 'null', {})
  }
};
