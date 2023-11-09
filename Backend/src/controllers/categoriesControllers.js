import mysql from 'mysql';
import config from '../config/config.js';

const pool = mysql.createPool(config.mysql);

// Get all categories
export const getCategories = (req, res) => {
  pool.query('SELECT * FROM categories', (error, results) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while retrieving categories... ${error.message}` });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Categories not found' });
      } else {
        res.status(200).json(results);
      }
    }
  });
};

// Get a specific category by ID
export const getCategoryById = (req, res) => {
  const categoryId = req.params.id;
  pool.query('SELECT * FROM categories WHERE id = ?', categoryId, (error, results) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while retrieving the category... ${error.message}` });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json(results[0]);
      }
    }
  });
};

// Create a new category
export const createCategory = (req, res) => {
  const { name } = req.body;
  pool.query('INSERT INTO categories (name) VALUES (?)', [name], (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while creating the category... ${error.message}` });
    } else {
      res.status(201).json({ message: 'Category created successfully' });
    }
  });
};

// Update a category by ID
export const updateCategory = (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;
  pool.query('UPDATE categories SET name = ? WHERE id = ?', [name, categoryId], (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while updating the category... ${error.message}` });
    } else {
      res.status(200).json({ message: 'Category updated successfully' });
    }
  });
};

// Delete a category by ID
export const deleteCategory = (req, res) => {
  const categoryId = req.params.id;
  pool.query('DELETE FROM categories WHERE id = ?', categoryId, (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while deleting the category... ${error.message}` });
    } else {
      res.status(200).json({ message: 'Category deleted successfully' });
    }
  });
};
