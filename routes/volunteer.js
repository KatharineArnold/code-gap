
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
    db.VolunteerProfile.findAll({}).then(function (dbVolunteerProfile) {
        console.log(dbVolunteerProfile);
        res.render('volunteer/list', { volunteers: dbVolunteerProfile });
    });
});


module.exports = router;
