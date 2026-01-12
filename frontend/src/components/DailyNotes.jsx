import { useRef } from "react";

function DailyNotes() {
  const editorRef = useRef(null);

  const format = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const addImage = () => {
    const url = prompt("Enter image URL");
    if (url) {
      format("insertImage", url);
    }
  };

  return (
    <div className="section-card">
      <h2>Daily Notes</h2>
      <p>Capture quick thoughts, learnings, or reminders.</p>

      {/* Toolbar */}
      <div className="editor-toolbar">
        <button onClick={() => format("bold")}>B</button>
        <button onClick={() => format("italic")}>I</button>
        <button onClick={() => format("underline")}>U</button>
        <button onClick={() => format("hiliteColor", "#fff3b0")}>
          🖍️
        </button>
        <button onClick={() => format("foreColor", "#2563eb")}>
          🎨
        </button>
        <button onClick={addImage}>🖼️</button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        className="note-editor"
        contentEditable
        placeholder="Write your notes here..."
        suppressContentEditableWarning
      />
    </div>
  );
}

export default DailyNotes;
