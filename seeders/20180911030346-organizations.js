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
    return queryInterface.bulkInsert('NonProfitProfiles', [{
      companyName: 'New Company',
      Description: "Company Number 1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      companyName: 'Choppers',
      Description: "Company Number 2",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      companyName: 'Billy Bobs',
      Description: "Company Number 3",
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
    return queryInterface.bulkDelete('nonProfitProfiles', null, {});

  }
};
