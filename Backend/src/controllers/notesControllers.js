const mysql = require('mysql');
const config = require('../config/config.js');

const pool = mysql.createPool(config.mysql);

// Get all notes
const getNotes = (req, res) => {
  pool.query('SELECT * FROM Notes', (error, results) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while retrieving notes... ${error.message}` });
    } else {
      res.status(200).json(results);
    }
  });
};

// Get a specific note by ID
const getNoteById = (req, res) => {
  const noteId = req.params.id;
  pool.query('SELECT * FROM Notes WHERE id = ?', noteId, (error, results) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while retrieving the note... ${error.message}` });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'Note not found' });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

// Create a new note
const createNote = (req, res) => {
  const { title, content } = req.body;
  const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
  pool.query('INSERT INTO Notes (title, content, created_at) VALUES (?, ?, ?)', [title, content, created_at], (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while creating the note... ${error.message}` });
    } else {
      res.status(201).json({ message: 'Note created successfully' });
    }
  });
};

// Update a note by ID
const updateNote = (req, res) => {
  const noteId = req.params.id;
  const { title, content } = req.body;
  pool.query('UPDATE Notes SET title = ?, content = ? WHERE id = ?', [title, content, noteId], (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while updating the note... ${error.message}` });
    } else {
      res.status(200).json({ message: 'Note updated successfully' });
    }
  });
};

// Delete a note by ID
const deleteNote = (req, res) => {
  const noteId = req.params.id;
  pool.query('DELETE FROM Notes WHERE id = ?', noteId, (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while deleting the note... ${error.message}` });
    } else {
      res.status(200).json({ message: 'Note deleted successfully' });
    }
  });
};


