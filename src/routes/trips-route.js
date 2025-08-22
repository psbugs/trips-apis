const express = require("express");
const { createTrip, getAllTrips } = require("../controller/trips-controller");

const router = express.Router();

router.post("/add-trip", createTrip);  
router.get("/get-trips", getAllTrips);     

module.exports = router;