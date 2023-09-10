require("dotenv/config");

const {env} = process;

const config = {
    port: env.PORT,
    db_uri: env.DB_URI,
    jwtSecret: env.JWT_SECRET,
    expiresToken: env.EXPIRES_TOKEN,
    smtp: {
        password: env.SMTP_PASSWORD,
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        mail: env.SMTP_MAIL
    }
};

module.exports = config;