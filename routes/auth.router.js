const express = require('express');

const singupHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");

const router = express.Router();

router.route("/register")  //localhost:8000/api/auth/register
    .post(singupHandler)

router.route("/login")          //localhost:8000/api/auth/login
    .post(loginHandler)

module.exports = router;