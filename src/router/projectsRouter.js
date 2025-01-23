const express = require('express');
const projectsRouter = express.Router();
const projects = require("../data/projects.json");

projectsRouter.route("/").get((req,res) => {
    res.render("projects",{
        projects, 
    });
});
projectsRouter.route("/:id").get((req,res) => {
    const id = req.params.id;
    res.render("project",{
        project: projects[id],
    })
});

module.exports = projectsRouter;