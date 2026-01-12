import { useState } from "react";

function DailyNotes() {
  const [note, setNote] = useState("");

  return (
    <div className="section-card">
      <h2>Daily Notes</h2>
      <p>Capture quick thoughts, learnings, or reminders.</p>

      <textarea
        className="text-area"
        placeholder="Write short notes for today..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}

export default DailyNotes;
