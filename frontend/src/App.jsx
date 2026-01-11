import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <h1>Neha’s Productivity Tracker</h1>
        <p>Track daily learning, DSA, and personal growth</p>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="dashboard-card">
          <div className="dashboard-header">
            <div>
              <h2>Today</h2>
              <span className="date">
                {new Date().toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="stats">
              {completedCount}/{tasks.length} completed
            </div>
          </div>

          <TaskForm onAddTask={addTask} />
          <TaskList tasks={tasks} onToggleTask={toggleTask} />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Built with React · Personal Project</p>
      </footer>
    </div>
  );
}

export default App;
