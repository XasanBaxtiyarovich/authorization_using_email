const router = require("express").Router();

const { authRegister, createOtp, authLogin } = require("../controller/auth.controller");

router.post("/auth/register", authRegister);
router.post("/auth/register/createOTP", createOtp);
router.post("/auth/login", authLogin);

module.exports = router;