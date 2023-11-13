// NoteList.jsx
import React from 'react';

const NoteList = ({ notes, activeNote, onSelectNote }) => {
  return (
    <div className="app-sidebar-notes">
      {notes.map((note) => (
        <div
          key={note.id}
          className={`app-sidebar-note ${note.id === activeNote && 'active'}`}
          onClick={() => onSelectNote(note.id)}
        >
          <div className="sidebar-note-title">
            <strong>{note.title}</strong>
          </div>
          <p>{note.body && note.body.substr(0, 100) + '...'}</p>
          <small className="note-meta">
            Last Modified{' '}
            {new Date(note.lastModified).toLocaleDateString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </small>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
