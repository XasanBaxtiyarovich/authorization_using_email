const express = require("express");
const sendMail = require("./utils/send.mail");
const app = express();

require("./start/modules")(app, express);
require("./start/run")(app);        