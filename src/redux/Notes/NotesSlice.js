import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push({
        id: nextId++,
        text: action.payload.text,
        color: action.payload.color,
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
