const Trips = require("../models/Trips");

// Create trips
const createTrip = async (req, res) => {
  try {
    const { name } = req.body;
    const tripCreatedRes = await Trips.create({ name });
    res.status(201).json(tripCreatedRes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all trips
const getAllTrips = async (req, res) => {
  try {
    const trips= await Trips.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTrip, getAllTrips };
