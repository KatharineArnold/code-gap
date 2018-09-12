const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();

const db = require('../models');

/* GET user profile. */
router.get('/', ensureLoggedIn, function (req, res, next) {
  //Look up the user, include the volunteer profile
  db.User.findOne({
    where: { email: req.user._json.email },
    include: [{ model: db.VolunteerProfile }]
  }).then(user => {
    res.render('user', {
      user: user,
      volunteerProfile: user.VolunteerProfile
    });
  });
  // res.render('user', {
  //   user: req.user,
  //   userProfile: JSON.stringify(req.user, null, '  ')
  // });
});

module.exports = router;
