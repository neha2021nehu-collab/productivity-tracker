import { useEffect, useState } from "react";

const moods = [
  { label: "Happy", emoji: "😊" },
  { label: "Calm", emoji: "😌" },
  { label: "Focused", emoji: "🎯" },
  { label: "Tired", emoji: "😴" },
  { label: "Stressed", emoji: "😖" },
];

const todayKey = new Date().toISOString().split("T")[0];

function DailyDiary() {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState("");
  const [saved, setSaved] = useState(false);

  // Load saved diary for today
  useEffect(() => {
    const stored = localStorage.getItem(`diary-${todayKey}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      setEntry(parsed.entry || "");
      setMood(parsed.mood || "");
    }
  }, []);

  // Auto-save on change
  useEffect(() => {
    const data = { entry, mood };
    localStorage.setItem(`diary-${todayKey}`, JSON.stringify(data));
    setSaved(true);

    const timeout = setTimeout(() => setSaved(false), 1200);
    return () => clearTimeout(timeout);
  }, [entry, mood]);

  return (
    <div className="section-card">
      <h2>Daily Diary</h2>
      <p>
        {new Date().toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Mood Selector */}
      <div className="mood-selector">
        {moods.map((m) => (
          <button
            key={m.label}
            className={`mood-btn ${mood === m.label ? "active" : ""}`}
            onClick={() => setMood(m.label)}
            title={m.label}
          >
            {m.emoji}
          </button>
        ))}
      </div>

      {/* Diary Text */}
      <textarea
  className="text-area diary diary-page"
  placeholder="How was your day? Write freely here..."
  value={entry}
  onChange={(e) => setEntry(e.target.value)}
/>


      {/* Footer UX */}
      <div className="diary-footer">
        <span>{entry.length} characters</span>
        {saved && <span className="saved-indicator">Saved ✓</span>}
      </div>
    </div>
  );
}

export default DailyDiary;
