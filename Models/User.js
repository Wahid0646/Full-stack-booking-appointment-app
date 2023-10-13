const Sequelize = require('sequelize');
const sequelize = new Sequelize('appointment', 'root', 'Wahid@0646', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
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
    allowNull: false
  },
  timing: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize.sync()
  .then(() => {
    console.log('User table created successfully.');
  })
  .catch(err => {
    console.error('Error creating User table:', err);
  });

module.exports = User;
