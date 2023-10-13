const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/config.json'); // Import Sequelize instance
const userController = require('./Controller/userController');
const appointmentController = require('./Controller/appointmentController');

// Import models
const User = require('./Models/User');
const Appointment = require('./Models/Appointment'); // Import Appointment model

const app = express();

app.use(bodyParser.json());

// Define routes
app.post('/api/users', userController.createUser);
app.get('/api/users', userController.getAllUsers);
app.get('/api/users/:id', userController.getUserById);
app.put('/api/users/:id', userController.updateUser);
app.delete('/api/users/:id', userController.deleteUser);

app.post('/api/appointments', appointmentController.createAppointment);
app.get('/api/appointments', appointmentController.getAllAppointments);
app.get('/api/appointments/:id', appointmentController.getAppointmentById);
app.put('/api/appointments/:id', appointmentController.updateAppointment);
app.delete('/api/appointments/:id', appointmentController.deleteAppointment);

const PORT = 3000;

// Sync models with the database
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
