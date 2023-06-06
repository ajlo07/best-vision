const express = require('express');
const {  signup_user, signIn_user } = require('../controller/signupController');
const router = express.Router();

router.post("/user/register", signup_user);
router.post("/user/login", signIn_user);

module.exports = router