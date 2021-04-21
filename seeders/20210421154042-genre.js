'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('genres', [
      {
        name: 'Action'
      }, {
        name: 'Science Fiction'
      }, {
        name: 'Comedy'
      }, {
        name: 'Terror'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('genres', null, {})
  }
};
