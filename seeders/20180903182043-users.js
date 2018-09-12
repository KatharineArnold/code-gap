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
      image: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jane Doe',
      email: 'jane@doe.com',
      image: "https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
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
