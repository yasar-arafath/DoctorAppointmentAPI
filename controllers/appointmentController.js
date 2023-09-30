const Appointment = require('../appointment');

const bookAppointment = async (req, res) => {
  const { doctor, patientName, date, timeSlot } = req.body;

  try {
    const appointment = new Appointment({
      doctor,
      patientName,
      date,
      timeSlot
    });

    const savedAppointment = await appointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  bookAppointment
};
