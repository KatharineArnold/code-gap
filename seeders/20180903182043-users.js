'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'john@doe.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jane Doe',
      email: 'jane@doe.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Suzie Dogood',
      email: 'suzie@dogood.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
