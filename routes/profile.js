
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const express = require('express');
const router = express.Router();
// var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================


router.get('/', function (req, res, next) {
    res.render('profile', {});
});


module.exports = router;
