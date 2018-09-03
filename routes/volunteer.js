
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const express = require('express');
const router = express.Router();
// var path = require("path");

var volunteerData = require("../db/volunteerData");

// ===============================================================================
// ROUTING
// ===============================================================================


router.get('/', function (req, res, next) {
    res.render('volunteer/volunteer', {});
});
router.get('/list', function (req, res, next) {
    res.render('volunteer/list', { volunteers: volunteerData });
});


module.exports = router;
