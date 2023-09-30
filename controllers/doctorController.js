const Doctor = require('../doctor');

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const getDoctorDetails = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (doctor == null) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllDoctors,
  getDoctorDetails
};
