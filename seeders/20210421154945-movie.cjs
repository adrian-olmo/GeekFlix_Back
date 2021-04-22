'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', [
      {
        title: 'Prueba1',
        year: '2021',
        poster_path: 'Imagen01',
        director: 'Ruben Fernandez',
        genreID: 4

      },
      {
        title: 'Prueba2',
        year: '2021',
        poster_path: 'Imagen02',
        director: 'Adrian Olmo',
        genreID: 1

      },
      {
        title: 'Prueba3',
        year: '2021',
        poster_path: 'Imagen03',
        director: 'Gabriel Abarca',
        genreID: 6

      },
      {
        title: 'Prueba4',
        year: '2021',
        poster_path: 'Imagen04',
        director: 'Angel Rodriguez',
        genreID: 2

      },
      {
        title: 'Prueba5',
        year: '2021',
        poster_path: 'Imagen05',
        director: 'Jarki Melendez',
        genreID: 9

      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('movies', 'null', {})
  }
};
