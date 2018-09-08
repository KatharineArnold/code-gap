
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const express = require('express');
const router = express.Router();
// var path = require("path");
const db = require('../models');


// ===============================================================================
// ROUTING
// ===============================================================================





router.get('/', function (req, res, next) {
    res.render('volunteer/volunteer', {});
});
router.get('/list', function (req, res, next) {
    // get all from db
    db.VolunteerProfile.findAll({
        include: [{ model: db.User }]
    }).then(function (dbVolunteerProfiles) {
        res.render('volunteer/list', { volunteers: dbVolunteerProfiles });
    });
});

//get the form
router.get('/create', function (req, res, next) {
    console.log('[create]', req.user);
    res.render('volunteer/create-volunteer', {});
});

//submitting new volunteer profile
router.post('/create', function (req, res, next) {
    //Look up userId from email
    db.User.findOne({ where: { email: req.user._json.email } }).then(user => {
        const profileData = {
            UserId: user.id,
            location: req.body.location,
            availability: req.body.hours
        }
        db.VolunteerProfile.create(profileData).then(function (dbVolunteerProfile) {
            res.json(dbVolunteerProfile);
        });
    });
});


module.exports = router;
