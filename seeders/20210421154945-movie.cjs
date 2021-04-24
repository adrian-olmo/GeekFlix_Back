'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'Prueba1',
        year: '2021',
        poster_path: 'Imagen01',
        genreID: 4

      },
      {
        title: 'Prueba2',
        year: '2021',
        poster_path: 'Imagen02',
        genreID: 1

      },
      {
        title: 'Prueba3',
        year: '2021',
        poster_path: 'Imagen03',
        genreID: 6

      },
      {
        title: 'Prueba4',
        year: '2021',
        poster_path: 'Imagen04',
        genreID: 2

      },
      {
        title: 'Prueba5',
        year: '2021',
        poster_path: 'Imagen05',
        genreID: 9

      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', 'null', {})
  }
};
