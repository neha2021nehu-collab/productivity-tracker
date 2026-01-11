function TaskList({ tasks, onToggleTask }) {
  if (tasks.length === 0) {
    return <p>No tasks added yet.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginLeft: "8px",
            }}
          >
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
