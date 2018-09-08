const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../models');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile'
}),
  function (req, res) {
    res.redirect("/");
  });

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// router.get('/callback',
//   passport.authenticate('auth0', {
//     failureRedirect: '/failure'
//   }),
//   function(req, res) {
//     res.redirect(req.session.returnTo || '/user');
//   }
// );





router.get('/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure'
  }),
  function (req, res) {
    // search for attributes
    console.log(req.user);
    console.log("user email", req.user._json.email);
    db.User.findOne({ where: { email: req.user._json.email } }).then(user => {
      console.log(user);

      if (user === null) {
        // create user
        db.User.create({ email: req.user._json.email, name: req.user.displayName })
          .then(user => {
            console.log('created User', user);
          });
        // redirect to create user
        res.redirect('/create-profile');

      } else {
        res.redirect(req.session.returnTo || '/user');

      }
      // user will be the first entry of the Users table with the title 'chopper@slowpoke.com' || null
    })

  }
);









router.get('/failure', function (req, res) {
  var error = req.flash("error");
  var error_description = req.flash("error_description");
  req.logout();
  res.render('failure', {
    error: error[0],
    error_description: error_description[0],
  });
});

module.exports = router;
