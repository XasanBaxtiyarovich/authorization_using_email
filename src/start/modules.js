const routes = require("../routes");
const errorHandler = require("../middlewares/error-handler");
const { swaggerUi, swaggerSpec } = require("../swagger/config");

const modules = async(app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use("/api", routes);
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.use(errorHandler);
};

module.exports = modules;