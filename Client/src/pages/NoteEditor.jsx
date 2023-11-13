// NoteEditor.jsx
import React from 'react';

const NoteEditor = ({ note, onUpdateNote }) => {
  const handleTitleChange = (e) => {
    onUpdateNote({ ...note, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    onUpdateNote({ ...note, body: e.target.value });
  };

  return (
    <div className="app-main-note-edit">
      <input
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={handleTitleChange}
        className="border p-2 mb-4 w-full"
      />
      <textarea
        placeholder="Type your note here..."
        value={note.body}
        onChange={handleBodyChange}
        className="border p-2 w-full h-full"
      />
    </div>
  );
};

export default NoteEditor;
