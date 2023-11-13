
const Trash = ({ trashedNotes, onRestoreNote, onDeleteForever }) => {
  return (
    <div>
      <h2>Trash</h2>
      {trashedNotes.map((note) => (
        <div key={note.id}>
          <p>{note.title}</p>
          <button onClick={() => onRestoreNote(note.id)}>Restore</button>
          <button onClick={() => onDeleteForever(note.id)}>Delete Forever</button>
        </div>
      ))}
    </div>
  );
};

export default Trash;
