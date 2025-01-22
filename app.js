const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const projectRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

projectRouter.route("/").get((req,res) => {
    res.render("projects", {
        projects: [
            {projectTitle: 'Customer1', projectDescription: 'Our Customer1', projectPeriod: '1 Month'},
            {projectTitle: 'Customer2', projectDescription: 'Our Customer2', projectPeriod: '2 Month'},
            {projectTitle: 'Customer3', projectDescription: 'Our Customer3', projectPeriod: '3 Month'},
            {projectTitle: 'Customer4', projectDescription: 'Our Customer4', projectPeriod: '4 Month'},
        ], 
    });
});
projectRouter.route("/1").get((req,res) => {
    res.send("Hello!! I'm Project 1");
});
app.use("/projects", projectRouter);

app.get("/", (req,res) => {
    res.render('index', {username: 'ako'});
});

app.listen(PORT ,() => {
    debug("Listening on port: " + chalk.blue(PORT));
});