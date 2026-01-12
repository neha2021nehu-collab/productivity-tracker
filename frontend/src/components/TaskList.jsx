function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-text">No tasks yet.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />

          <span className={task.completed ? "completed" : ""}>
            {task.text}
          </span>

          <button
            className="delete-btn"
            onClick={() => onDeleteTask(task.id)}
            title="Delete task"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
