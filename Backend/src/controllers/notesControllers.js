import mysql from 'mysql';
import config from '../config/config.js';

const pool = mysql.createPool(config.mysql);

// Get all notes
export const getNotes = (req, res) => {
  pool.query('SELECT * FROM notes', (error, results) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while retrieving notes... ${error.message}` });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Notes not found' });
      } else {
        res.status(200).json(results);
      }
    }
  });
};

// Get a specific note by ID
export const getNoteById = (req, res) => {
  const noteId = req.params.id;
  pool.query('SELECT * FROM notes WHERE id = ?', noteId, (error, results) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while retrieving the note... ${error.message}` });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Note not found' });
      } else {
        res.status(200).json(results[0]);
      }
    }
  });
};

// Create a new note
export const createNote = (req, res) => {
  const { title, content } = req.body;
  const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
  pool.query('INSERT INTO notes (title, content, created_at) VALUES (?, ?, ?)', [title, content, created_at], (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while creating the note... ${error.message}` });
    } else {
      res.status(201).json({ message: 'Note created successfully' });
    }
  });
};

// Update a note by ID
export const updateNote = (req, res) => {
  const noteId = req.params.id;
  const { title, content } = req.body;
  pool.query('UPDATE notes SET title = ?, content = ? WHERE id = ?', [title, content, noteId], (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while updating the note... ${error.message}` });
    } else {
      res.status(200).json({ message: 'Note updated successfully' });
    }
  });
};

// Delete a note by ID
export const deleteNote = (req, res) => {
  const noteId = req.params.id;
  pool.query('DELETE FROM notes WHERE id = ?', noteId, (error) => {
    if (error) {
      res.status(500).json({ error: `An error occurred while deleting the note... ${error.message}` });
    } else {
      res.status(200).json({ message: 'Note deleted successfully' });
    }
  });
};
