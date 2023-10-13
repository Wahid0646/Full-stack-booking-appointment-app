const Sequelize = require('sequelize');
const sequelize = require('../config/config.json');

const Appointment = sequelize.define('Appointment', {
  // Define appointment properties
  // For example:
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
      }
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  timing: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Add more properties as needed
});

module.exports = Appointment;
