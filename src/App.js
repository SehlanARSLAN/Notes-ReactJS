import './App.css';
import NotesList from './components/notesList/NotesList';
import SearchInput from './components/searchInput/SearchInput';
import Textarea from './components/textarea/Textarea';

function App() {
  return (
    <div className="App">
    <h1>NotesApp</h1>
    <SearchInput/>
    <Textarea/>
    <NotesList/>
    </div>
  );
}

export default App;
