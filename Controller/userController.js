const User = require('../Models/User');

exports.createUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, city, state, date, timing } = req.body;
    const newUser = await User.create({ name, email, phoneNumber, city, state, date, timing });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const [updatedRowsCount, updatedUser] = await User.update(req.body, {
      where: { id: userId },
      returning: true, // Return the updated user object
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedRowCount = await User.destroy({
      where: { id: userId },
    });

    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
