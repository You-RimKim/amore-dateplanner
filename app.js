require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");
const path = require("path");
const app = express();


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));


hbs.registerPartials(path.join(__dirname + "/views/partials"))

require('./config')(app);
require('./config/session.config')(app);

const projectName = "amore";
app.locals.appTitle = `d'${(projectName)} Date Planner`;

const indexRoutes = require("./routes/index.routes");


app.use("/", indexRoutes);


const authRouter = require("./routes/auth.routes");
app.use("/", authRouter);

const dateSuggRouter = require("./routes/datesuggestions.routes");
app.use("/", dateSuggRouter);



require("./error-handling")(app);
module.exports = app;