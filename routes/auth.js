const express = require("express");
const router = express.Router();

const { login, register, getUser } = require("../controller/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/getUser/:id").get(getUser);

module.exports = router;
