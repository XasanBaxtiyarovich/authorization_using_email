const { connect } = require("mongoose");
const config = require("../../config");

const run = async(app) => {
    await connect(config.db_uri);
    console.log("Connect to DB...");

    app.listen(config.port, () => {
        console.log(`Server listening on port: ${config.port}`);
    });
};


module.exports = run; 