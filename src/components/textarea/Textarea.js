import React, { useState } from "react";
import "./textarea.css";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../../redux/colorThema/ColorSlice";
import { addNote } from "../../redux/Notes/NotesSlice";

function Textarea() {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color.color);
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (noteText.trim() && color) {
      dispatch(addNote({ text: noteText, color: color }));
      setNoteText("");
      dispatch(setColor(""));
    }
  };

  return (
    <div className="textarea-container">
      <textarea
        className="textarea"
        placeholder="Type your note here..."
        rows="10"
        cols="100"
        onChange={(e) => setNoteText(e.target.value)}
        value={noteText}
      />
      <div>
        {["#f28b82", "#fbbc04", "#fff475", "#a7ffeb", "#ccff90"].map(
          (colors) => (
            <button
              key={colors}
              onClick={() => dispatch(setColor(colors))}
              style={{
                backgroundColor: colors,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                margin: "0 5px",
                border: color === colors ? "2px solid #333" : "none",
              }}
            />
          )
        )}
      </div>
      <button onClick={handleAddNote} className="add-button">
        ADD
      </button>
    </div>
  );
}

export default Textarea;
