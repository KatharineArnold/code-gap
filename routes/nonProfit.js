
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const express = require('express');
const router = express.Router();
// var path = require("path");
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();


const db = require('../models');


// ===============================================================================
// ROUTING
// ===============================================================================


router.get('/', function (req, res, next) {
    res.render('nonProfit/nonProfit', {});
});

router.get('/list', function (req, res, next) {
    // get all from db
    db.NonProfitProfile.findAll({
    }).then(function (dbNonProfitProfiles) {
        res.render('nonProfit/list', { nonProfitProfiles: dbNonProfitProfiles });
    });
});

//get the form
router.get('/create', ensureLoggedIn, function (req, res, next) {
    res.render('nonProfit/create-non-profit', {});
});

//submitting new organization profile
router.post('/create', ensureLoggedIn, function (req, res, next) {
    //Look up userId from email
    // db.User.findOne({ where: { email: req.user._json.email } }).then(user => {
    const nonProfitProfileData = {
        // UserId: user.id,
        companyName: req.body.companyName,
        description: req.body.description,
    }

    // creating non profit profile then adding user to profile
    db.NonProfitProfile.create(nonProfitProfileData).then(function (dbNonProfitProfile) {
        db.User.findOne({ where: { email: req.user._json.email } }).then(user => {
            user.addNonProfitProfile(dbNonProfitProfile, { through: { role: 'owner' } });

        });

        res.json(dbNonProfitProfile);
    });
    // });
});

// DELETE route for deleting organizations
router.delete("/list/:id", ensureLoggedIn, function (req, res) {
    db.NonProfitProfile.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(function (dbNonProfitProfile) {
            res.json(dbNonProfitProfile);
        });
});


// PUT route for updating 
router.put("/list", ensureLoggedIn, function (req, res) {
    db.NonProfitProfile.update({
        companyName: req.body.companyName,
        description: req.body.description,
    }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbNonProfitProfile) {
            res.json(dbNonProfitProfile);
        });
});


module.exports = router;
