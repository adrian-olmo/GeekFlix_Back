'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        rentstart: '2021-04-22',
        rentend: '2021-05-22',
        status: 'Alquilada',
        userID: 1,
        movieID: 2

      },
      {
        rentstart: '2021-04-20',
        rentend: '2021-04-30',
        status: 'En Tienda',
        userID: 2,
        movieID: 1

      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', 'null', {})
  }
};
