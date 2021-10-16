const express = require("express");
const router = express.Router();

const { pie, radar } = require("../controller/stats");

router.route("/pie/:id").get(pie);

router.route("/radar/:id").get(radar);

module.exports = router;
