const {createClient} = require("redis");

const client = createClient();

client.on("error", (err) => {
    console.log(err);
});

module.exports = client;