/* Add this to your styles */
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");

/* Add these classes to your HTML elements */
<div className="bg-gradient-to-r from-green-400 to-blue-500">

    <button className="hover:text-blue-500">Hover me</button>

    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1 className="text-2xl font-bold mb-4">Notes</h1>
            <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={onAddNote}
            >
                Add
            </button>
        </div>
        <div className="app-sidebar-notes">
            {sortedNotes.map(({ id, title, body, lastModified }, i) => (
                <div
                    className={`app-sidebar-note ${id === activeNote && "active"}`}
                    onClick={() => setActiveNote(id)}
                >
                    <div className="sidebar-note-title">
                        <strong>{title}</strong>
                        <button
                            className="text-red-600 hover:text-red-400"
                            onClick={(e) => onDeleteNote(id)}
                        >
                            Delete
                        </button>
                    </div>

                    <p>{body && body.substr(0
