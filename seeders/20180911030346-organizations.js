'use strict';

const db = require('../models');


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

    const promise = new Promise((resolve, reject) => {
      db.NonProfitProfile.create({
        companyName: 'Choppers Basset Rescue',
        description: "A rescue for the most patient and forgiving dog owners.",
      }).then(choppers => db.Project.create({
        projectName: 'Adoption Site',
        projectDescription: "Node Project",
        NonProfitProfileId: choppers.id
      })).then(() => db.NonProfitProfile.create({
        companyName: 'Dot Angel house',
        Description: "For those who want to save a sweet little cherub straight from above.",
      })).then(dot => db.Project.create({
        projectName: 'Dot Site Redesign',
        projectDescription: "Javascript Project",
        NonProfitProfileId: dot.id,
      })).then(() => db.NonProfitProfile.create({
        companyName: 'Billy Bobs',
        Description: "Helping Billies and Bobs",
      })).then(billy => db.Project.create({
        projectName: 'Project 3',
        projectDescription: "PHP Project",
        NonProfitProfileId: billy.id,
      }))
        .then(() => resolve())
        .catch((reason) => reject(reason));
    });

    return promise;
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
  
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Projects', null, {})
      .then(() => queryInterface.bulkDelete('NonProfitProfiles', null, {}));

  }
};
