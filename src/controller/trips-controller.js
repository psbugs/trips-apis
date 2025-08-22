const Trips = require("../models/Trips");

// Create trips
const createTrip = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) res.status(401).json({ message: 'Trip name is not provided.', status: 0 })
    await Trips.create({ name });
    res.status(201).json({ message: 'Trip is created successfully', status: 1 });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 0 });
  }
};

// Get all trips
const getAllTrips = async (req, res) => {
  try {
    const trips = await Trips.find().select({ name: 1, _id: 0 });
    if (!trips.length) res.status(401).json({ message: 'No trips found', status: 0 })
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTrip, getAllTrips };
