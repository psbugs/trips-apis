const mongoose = require("mongoose");

const tripsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Trips = mongoose.model("Trips", tripsSchema);
module.exports = Trips;
