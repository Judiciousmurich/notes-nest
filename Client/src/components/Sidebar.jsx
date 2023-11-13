
const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="flex-none w-1/3 h-screen border-r border-gray-300">
      <div className="flex justify-between p-6">
        <h1 className="text-xl font-semibold">Notes</h1>
        <button
          className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded transition duration-300 hover:bg-blue-500 hover:text-white"
          onClick={onAddNote}
        >
          Add
        </button>
      </div>
      <div className="overflow-y-scroll h-full">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            key={id}
            className={`p-6 cursor-pointer ${
              id === activeNote && "bg-blue-500 text-white"
            }`}
            onClick={() => setActiveNote(id)}
          >
            <div className="flex justify-between">
              <strong>{title}</strong>
              <button
                className="text-red-600"
                onClick={(e) => onDeleteNote(id)}
              >
                Delete
              </button>
            </div>

            <p>{body && body.substr(0, 100) + "..."}</p>
            <small className="block text-gray-600">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
