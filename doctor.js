const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  availableDays: [String], 
  maxPatients: Number,
});

module.exports = mongoose.model('Doctor', doctorSchema);