const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };
  
  // ...
  
  {filteredNotes.map((note, index) => (
    <li key={index}>
      {note.note} - Category: {note.category}
      <button onClick={() => deleteNote(index)}>Delete</button>
    </li>
  ))}
  