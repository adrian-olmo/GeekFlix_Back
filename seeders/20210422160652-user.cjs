'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const hashTemp = 10;
    const commonPassword = "1234";
    const adminPassword = "admin";

    const passwordHashUser = await bcrypt.hash(commonPassword, hashTemp);
    const passwordHashAdmin = await bcrypt.hash(adminPassword, hashTemp);

    await queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: passwordHashAdmin,
        role: 'admin'
      },
      {
        email: 'adri@gmail.com',
        password: passwordHashUser,
        role: 'user'
      },
      {
        email: 'ruben@gmail.com',
        password: passwordHashUser,
        role: 'user'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', 'null', {})
  }
};
