const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/yas', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});
const Doctor = require('./doctor');
const doctor1 = new Doctor({
    name: 'Dr. John Doe',
    specialization: 'Cardiologist'
  });
  
  const doctor2 = new Doctor({
    name: 'Dr. Jane Smith',
    specialization: 'Pediatrician'
  });
  
  
  doctor1.save();
  doctor2.save();
  
  
