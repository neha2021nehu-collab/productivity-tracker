import { useState } from "react";

function DailyDiary() {
  const [entry, setEntry] = useState("");

  return (
    <div className="section-card">
      <h2>Daily Diary</h2>
      <p>Reflect on your day, thoughts, and feelings.</p>

      <textarea
        className="text-area diary"
        placeholder="Write your reflections..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
    </div>
  );
}

export default DailyDiary;
