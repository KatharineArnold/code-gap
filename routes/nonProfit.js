
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

router.get('/show/:id', function (req, res, next) {
    db.NonProfitProfile.findOne({
        where: { id: req.params.id },
        include: [{ model: db.Project }]
    }).then(function (dbNonProfitProfile) {
        res.render('nonProfit/show', { nonProfitProfile: dbNonProfitProfile });
    })

});

router.get('/list', function (req, res, next) {
    // get all from db
    db.NonProfitProfile.findAll({
        include: [{ model: db.Project }, { model: db.User }]
    }).then(function (dbNonProfitProfiles) {
        //adding counts to non profit profiles
        let orgViewModel = dbNonProfitProfiles.map(function (org) {
            return {
                id: org.id,
                email: org.email,
                phone: org.phone,
                companyName: org.companyName,
                description: org.description,
                memberCount: org.Users.length,
                projectCount: org.Projects.length,
                location: org.location
            }
        });
        res.render('nonProfit/list', { nonProfitProfiles: orgViewModel });
    });
});

//get the form
router.get('/create', ensureLoggedIn, function (req, res, next) {
    res.render('nonProfit/create-non-profit', {});
});

//submitting new organization profile
router.post('/create', ensureLoggedIn, function (req, res, next) {
    //Look up userId from email
    const nonProfitProfileData = {
        // UserId: user.id,
        companyName: req.body.companyName,
        description: req.body.description,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location
    }

    // creating non profit profile then adding user to profile
    db.NonProfitProfile.create(nonProfitProfileData).then(function (dbNonProfitProfile) {
        db.User.findOne({ where: { email: req.user._json.email } }).then(user => {
            user.addNonProfitProfile(dbNonProfitProfile, { through: { role: 'owner' } });
        });
        res.json(dbNonProfitProfile);
    });
});



// DELETE route for deleting organizations
router.delete("/:id/delete", ensureLoggedIn, function (req, res) {
    db.NonProfitProfile.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(function (dbNonProfitProfile) {
            res.json(dbNonProfitProfile);
        });
});



// PUT route for updating nonprofit
router.put("/:id/update", ensureLoggedIn, function (req, res) {
    db.NonProfitProfile.update({
        companyName: req.body.companyName,
        description: req.body.description,
        email: req.body.email,
        phone: req.body.phone,
        location: req.body.location
    }, {
            where: {
                id: req.params.id
            }
        }).then(function (dbNonProfitProfile) {
            res.json(dbNonProfitProfile);
        });
});


//get the form, and passing in profile to update
router.get('/:id/update', ensureLoggedIn, function (req, res, next) {
    db.NonProfitProfile.findOne({ where: { id: req.params.id } }).then(nonProfitProfile => {
        res.render('nonProfit/update', { nonProfitProfile: nonProfitProfile });
    });

});





module.exports = router;
