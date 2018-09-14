
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

router.get('/list', function (req, res, next) {
    // get all from db
    db.Project.findAll({
        include: [{ model: db.NonProfitProfile }]
    }).then(function (dbProjects) {
        console.log(dbProjects);
        res.render('project/list', { projects: dbProjects });
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


// DELETE route for deleting posts
router.delete("/:id/delete", ensureLoggedIn, function (req, res) {
    db.Project.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(function (dbProjects) {
            res.json(dbProjects);
        });
});

// PUT route for updating 
router.put("/:id/update", ensureLoggedIn, function (req, res) {
    db.Project.update({
        projectName: req.body.projectName,
        projectDescription: req.body.projectDescription
    }, {
            where: {
                id: req.params.id
            }
        }).then(function (dbProject) {
            res.json(dbProject);
        });
});


//get the form, and passing in profile to update
router.get("/:id/update", ensureLoggedIn, function (req, res, next) {
    db.Project.findOne({ where: { id: req.params.id } }).then(project => {
        res.render("project/update", { project: project });
    });

});


module.exports = router;
