const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const projectsRouter = require("./src/router/projectsRouter");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/projects", projectsRouter);

app.get("/", (req,res) => {
    res.render('index', {username: 'ako'});
});

app.listen(PORT ,() => {
    debug("Listening on port: " + chalk.blue(PORT));
});