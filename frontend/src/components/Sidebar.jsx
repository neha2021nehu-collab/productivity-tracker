function Sidebar({ activeSection, setActiveSection }) {
  const items = [
    { id: "home", label: "Home" },
    { id: "tasks", label: "Tasks" },
    { id: "notes", label: "Daily Notes" },
    { id: "diary", label: "Daily Diary" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Workspace</h2>

      <nav>
        {items.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${
              activeSection === item.id ? "active" : ""
            }`}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
