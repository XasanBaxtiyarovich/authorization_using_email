const bcrypt = require("bcrypt");

const Users = require("../models/User.model");
const sendMail = require("../utils/send.mail");
const randomOtp = require("../utils/otp-generator");
const client = require("../utils/redis");
const { generateToken } = require("../utils/jwt");
const CustomError = require("../utils/costom-error");

const authRegister = async(req, res, next) => {
    try {
        const {email, password} = req.body;

        const [user] = await Users.find({email: email, isVerified: true});
        if(user) throw new CustomError(403, "Email already registered");

        const otp = String(randomOtp());
        const html = `<b style='font-size: 40px'>Your verification password is: ${otp}</b>`;

        sendMail({to: email, subject: "Verification", text: html});

        await client.connect();
        await client.set(otp, JSON.stringify({email, otp, password}), {ex: 120});
        await client.disconnect();

        res.json({message: "Verification code sent is your mail"});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const createOtp = async(req, res, next) => {
    try {
        const {otp} = req.body; 

        await client.connect();
        let data = await client.get(otp);
        await client.disconnect();
        
        if(!data) return res.status(404).json({message: "OTP not active or wrong"});

        data = JSON.parse(data);
        
        const hashedPass = await bcrypt.hash(data.password, 12);

        const NewUser = await Users.create({email: data.email, password: hashedPass});
        
        const token = await generateToken({id: NewUser._id});

        res.status(201).json({message: "Success", token: token});

        await client.connect();
        await client.del(otp);
        await client.disconnect();
    } catch (error) {
        console.log(error); 
        next(error);
    }
};
 
const authLogin = async(req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await Users.findOne({email})
        if(!user) return res.status(404).json({message: "Invalid User or Password"});

        const pass = await bcrypt.compare(password, user.password);
        if(!pass) return res.status(404).json({message: "Invalid User or Password"});

        const token = await generateToken({id: user._id});

        res.status(201).json({message: "Success", token: token});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {authRegister, createOtp, authLogin};