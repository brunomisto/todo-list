const Task = ({ task, onDelete, onCheck, onChange }) => {
  const handlePriorityChange = (event) => {
    event.preventDefault();
    onChange(task.id, event.target.value);
  };

  const classes = `task ${task.priority} ${task.checked ? "check" : "uncheck"}`;
  return (
    <li>
      <span className={classes} onClick={onCheck}>
        {task.name}
      </span>
      <button onClick={onDelete}>delete</button>
      <label>
        priority
        <select value={task.priority} onChange={handlePriorityChange}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>
    </li>
  );
};

export default Task;
