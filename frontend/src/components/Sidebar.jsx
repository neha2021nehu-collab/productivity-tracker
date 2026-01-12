function Sidebar({ activeSection, setActiveSection }) {
  const items = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "tasks", label: "Tasks", icon: "✅" },
    { id: "notes", label: "Daily Notes", icon: "📝" },
    { id: "diary", label: "Daily Diary", icon: "📖" },
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
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
