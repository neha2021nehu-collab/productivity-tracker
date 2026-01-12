import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import DailyNotes from "./components/DailyNotes";
import DailyDiary from "./components/DailyDiary";

function App() {
  // Workspace navigation
  const [activeSection, setActiveSection] = useState("home");

  // Tasks state
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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="workspace">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <main className="content">
        {/* HOME */}
        {activeSection === "home" && <Home />}

        {/* TASKS */}
        {activeSection === "tasks" && (
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

            {/* Progress Bar */}
            <div className="progress-wrapper">
              <div className="progress-label">Progress</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width:
                      tasks.length === 0
                        ? "0%"
                        : `${(completedCount / tasks.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <TaskForm onAddTask={addTask} />
            <TaskList
              tasks={tasks}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
            />
          </div>
        )}

        {/* DAILY NOTES */}
        {activeSection === "notes" && <DailyNotes />}

        {/* DAILY DIARY */}
        {activeSection === "diary" && <DailyDiary />}
      </main>
    </div>
  );
}

export default App;
