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
        companyName: "Choppers Basset Rescue",
        description: "A rescue for the most patient and forgiving dog owners.",
        location: "Fort Collins, CO",
        phone: "123-456-7890",
        email: "chop@email.com",
      }).then(choppers => db.Project.create({
        projectName: "Adoption Site",
        projectDescription: "Create adoption site using MERN stack",
        NonProfitProfileId: choppers.id
      })).then(() => db.NonProfitProfile.create({
        companyName: "Dot's Angel house",
        description: "For those who want to save a sweet little cherub straight from above.",
        location: "Binghamton, NY",
        phone: "234-567-8901",
        email: "dot@email.com",
      })).then(dot => db.Project.create({
        projectName: "Dot's Site Redesign",
        projectDescription: "Refresh of UI, 3 month timeline.",
        NonProfitProfileId: dot.id,
      })).then(() => db.NonProfitProfile.create({
        companyName: 'Billy Bobs',
        description: "Helping Billies and Bobs",
        location: "Denver, CO",
        phone: "345-678-9012",
        email: "bb@email.com",
      })).then(billy => db.Project.create({
        projectName: 'Project 3',
        projectDescription: "Add social media links and contact us section.",
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
