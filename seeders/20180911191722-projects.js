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
    return queryInterface.bulkInsert('Projects', [{
      projectName: 'New Project',
      projectDescription: "Node Project",
      NonProfitProfileId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      projectName: 'Project 2',
      projectDescription: "Javascript Project",
      NonProfitProfileId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      projectName: 'Project 3',
      projectDescription: "PHP Project",
      NonProfitProfileId: 3,
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
  },

  // down: (queryInterface, Sequelize) => {
  //   /*
  //     Add reverting commands here.
  //     Return a promise to correctly handle asynchronicity.

  //     Example:
  //     return queryInterface.bulkDelete('Person', null, {});
  //   */
  //   return queryInterface.bulkDelete('volunteerProfiles', null, {});

  // }
};
