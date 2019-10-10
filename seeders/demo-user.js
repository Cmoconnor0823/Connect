'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profiles', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com',
        phoneNumber:"5678309",
        username: "John",
        password:"password",
        position:"Web Developer",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profile', null, {});
  }
};