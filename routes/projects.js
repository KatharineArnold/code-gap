
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const express = require('express');
const router = express.Router();
// var path = require("path");
const db = require('../models');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();


// ===============================================================================
// ROUTING
// ===============================================================================

router.get('/', function (req, res, next) {
    // get all from db
    db.Project.findAll({
        // include: [{ model: db.User }]
    }).then(function (dbProjects) {
        console.log(dbProjects);
        res.render('projects', { projects: dbProjects });
    });
});

//get the form
router.get('/add-project', ensureLoggedIn, function (req, res, next) {
    res.render('addProject', { nonProfitProfileId: req.query.nonProfitProfileId });
});

//adding project to database

router.post('/add-project', ensureLoggedIn, function (req, res, next) {
    const projectData = {
        NonProfitProfileId: req.body.nonProfitProfileId,
        projectName: req.body.projectName,
        projectDescription: req.body.projectDescription
    }
    db.Project.create(projectData).then(function (dbProjects) {
        res.json(dbProjects);
    });
});


// // DELETE route for deleting posts
// router.delete("/projects/:id", ensureLoggedIn, function (req, res) {
//     db.Project.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(function (dbProjects) {
//             res.json(dbProjects);
//         });
// });

// // PUT route for updating volunteers
// router.put("/list", ensureLoggedIn, function (req, res) {
//     db.VolunteerProfile.update({
//         location: req.body.location,
//         availability: req.body.hours
//     }, {
//             where: {
//                 id: req.body.id
//             }
//         }).then(function (dbVolunteerProfile) {
//             res.json(dbVolunteerProfile);
//         });
// });

module.exports = router;
