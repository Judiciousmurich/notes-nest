import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [currentCategory, setCurrentCategory] = useState(''); 

  const addNote = () => {
    if (currentNote.trim() !== '' && currentCategory.trim() !== '') {
      setNotes([...notes, { note: currentNote, category: currentCategory }]);
      setCurrentNote('');
      setCurrentCategory('');
    }
  };

  const filterNotes = (category) => {
    setCurrentCategory(category);
  };

  const filteredNotes = currentCategory
    ? notes.filter((note) => note.category === currentCategory)
    : notes;

  return (
    <div>
      <h1>My Notes</h1>

      {/* Category Filter */}
      <div>
        <label>Select Category: </label>
        <select
          value={currentCategory}
          onChange={(e) => filterNotes(e.target.value)}
        >
          <option value="">All</option>
          {/* Add your specific categories here */}
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <ul>
        {filteredNotes.map((note, index) => (
          <li key={index}>
            {note.note} - Category: {note.category}
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Enter your note"
        />
        <label>Select Category: </label>
        <select
          value={currentCategory}
          onChange={(e) => setCurrentCategory(e.target.value)}
        >
          {/* Add your specific categories here */}
          <option value="">Select</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          {/* Add more categories as needed */}
        </select>
        <button onClick={addNote}>Add Note</button>
      </div>
    </div>
  );
};

export default Notes;
