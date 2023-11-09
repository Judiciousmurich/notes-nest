import mysql from 'mysql';
import config from '../config/config.js';

const pool = mysql.createPool(config.mysql);

// Get all users
export const getUsers = (req, res) => {
  pool.query('SELECT * FROM Users', (error, results) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while retrieving users... ${error.message}` });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Users not found' });
      } else {
        res.status(200).json(results);
      }
    }
  });
};

// Get a specific user by ID
export const getUserById = (req, res) => {
  const userId = req.params.id;
  pool.query('SELECT * FROM Users WHERE id = ?', userId, (error, results) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while retrieving the user... ${error.message}` });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(200).json(results[0]);
      }
    }
  });
};

// Create a new user
export const createUser = (req, res) => {
  const { password, email } = req.body;
  const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
  pool.query('INSERT INTO Users (password, email, created_at) VALUES (?, ?, ?)', [password, email, created_at], (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while creating the user... ${error.message}` });
    } else {
      res.status(201).json({ message: 'User created successfully' });
    }
  });
};

// Update a user by ID
export const updateUser = (req, res) => {
  const userId = req.params.id;
  const { password, email } = req.body;
  pool.query('UPDATE Users SET password = ?, email = ? WHERE id = ?', [password, email, userId], (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while updating the user... ${error.message}` });
    } else {
      res.status(200).json({ message: 'User updated successfully' });
    }
  });
};

// Delete a user by ID
export const deleteUser = (req, res) => {
  const userId = req.params.id;
  pool.query('DELETE FROM Users WHERE id = ?', userId, (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while deleting the user... ${error.message}` });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
};
