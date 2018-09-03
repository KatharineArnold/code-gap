
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const express = require('express');
const router = express.Router();
// var path = require("path");

var nonProfitData = require("../db/nonProfitData");

// ===============================================================================
// ROUTING
// ===============================================================================


router.get('/', function (req, res, next) {
    res.render('nonProfit/nonProfit', {});
});

router.get('/list', function (req, res, next) {
    res.render('nonProfit/list', { nonProfits: nonProfitData });
});


module.exports = router;
