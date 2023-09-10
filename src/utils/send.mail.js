const nodemailer = require("nodemailer");
const config = require("../../config");

const {smtp} = config;

const mailConfig = {
    sevice: "gamil",
    host: smtp.host,
    port: smtp.port,
    secure: false,
    auth: {
        user: smtp.mail,
        pass: smtp.password
    }
};

const transport = nodemailer.createTransport(mailConfig);

const sendMail = async({to, subject, text}) => {
    const data = {
        from: smtp.mail,
        to: to,
        subject: subject,
        html: text
    }
    const info = transport.sendMail(data); 

    return info;
};

module.exports = sendMail;