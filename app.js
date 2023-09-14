
require("dotenv").config();

require("./db");


const express = require("express");


const hbs = require("hbs");

const app = express();




require('./config')(app); // do not remove this!!!!!
require('./config/session.config')(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "amore";

app.locals.appTitle = `d'${capitalize(projectName)} Date Planner`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/", authRouter);

const dateSuggRouter = require("./routes/datesuggestions.routes");
app.use("/", dateSuggRouter);

require("./error-handling")(app);

module.exports = app;


