'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', [
      {
        title: 'Prueba1',
        year: '21/04/2021',
        poster_path: 'Imagen01',
        director: 'Ruben Fernandez',
        genreID: 4

      },
      {
        title: 'Prueba2',
        year: '21/04/2021',
        poster_path: 'Imagen02',
        director: 'Adrian Olmo',
        genreID: 1

      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
