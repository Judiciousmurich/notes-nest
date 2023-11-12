import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const [currentNote, setCurrentNote] = useState('');

  const addNote = () => {
    if (currentNote.trim() !== '') {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  };

  return (
    <div>
      <h1>My Notes</h1>

      {/* Display the list of notes */}
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>

      {/* Input field for adding a new note */}
      <div>
        <input
          type="text"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Enter your note"
        />
        <button onClick={addNote}>Add Note</button>
      </div>
    </div>
  );
};

export default Notes;
