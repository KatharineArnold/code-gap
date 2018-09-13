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
      db.User.create({
        name: "John Doe",
        email: "john@doe.com",
        image: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      }).then(john => db.VolunteerProfile.create({
        location: 'Denver',
        availability: 20,
        UserId: john.id
      })).then(() => db.User.create({
        name: "Jane Doe",
        email: "jane@doe.com",
        image: "https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
      })).then(jane => db.VolunteerProfile.create({
        location: 'San Francisco',
        availability: 10,
        UserId: jane.id
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
    return queryInterface.bulkDelete('VolunteerProfiles', null, {})
      .then(() => queryInterface.bulkDelete('Users', null, {}));
  }
};
