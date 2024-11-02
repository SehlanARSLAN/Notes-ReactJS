import React from "react";
import "./notesList.css";

import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/Notes/NotesSlice";

function NotesList() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const searchKey = useSelector((state) => state.filter);

  const filteredNotes = notes.filter((notes) =>
    notes.text.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="notes-list">
      {
        filteredNotes.map((note) =>(
          <div className="note" key={note.id} style={{backgroundColor: note.color}}>
            <p>{note.text}</p>
            <button className="delete-button" onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default NotesList;
