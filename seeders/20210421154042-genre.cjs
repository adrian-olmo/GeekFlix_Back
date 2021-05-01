'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Genres', [
      {
        name: 'Action'
      },
      {
        name: 'Adventures'
      },
      {
        name: 'Animation'
      },
      {
        name: 'Comedy'
      },
      {
        name: 'Drama'
      },
      {
        name: 'Horror'
      },
      {
        name: 'Love'
      },
      {
        name: 'Science Fiction'
      },
      {
        name: 'Thriller'
      },
      {
        name: 'War'
      },

    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Genres', null, {})
  }
};
