const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  patientName: String,
  date: Date,
  timeSlot: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);