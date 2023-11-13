import Header from './Header';
import Sidebar from './Sidebar';
import NoteEditor from './NoteEditor';

const MainLayout = ({ notes, activeNote, onAddNote, onDeleteNote, onUpdateNote, onSelectNote }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar notes={notes} activeNote={activeNote} onSelectNote={onSelectNote} onAddNote={onAddNote} onDeleteNote={onDeleteNote} />
        <NoteEditor note={activeNote} onUpdateNote={onUpdateNote} />
      </div>
    </div>
  );
};

export default MainLayout;
