const express = require("express");
const router = express.Router();

const tripsRoute = require("./trips-route");

router.use("/trips", tripsRoute);

module.exports = router;
