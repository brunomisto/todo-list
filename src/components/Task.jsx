const Task = ({ task, onDelete, onCheck, onChange, selected, setSelected }) => {
  const handlePriorityChange = (event) => {
    event.preventDefault();
    onChange(task.id, event.target.value);
  };

  const handleToggleSelect = () => {
    if (selected) {
      setSelected(null);
    } else {
      setSelected(task.id);
    }
  };

  const classes = `task ${task.priority} ${task.checked ? "check" : "uncheck"} ${selected ? "active" : ""}`;
  return (
    <li className={classes}>
      <div className="content">
        <span className="task-name" onClick={onCheck}>
          {task.name}
        </span>
        <div className="controls">
          <button onClick={handleToggleSelect}>
            {selected ? "hide" : "expand"}
          </button>
          <button onClick={onDelete}>delete</button>
        </div>
      </div>
      <label className="priority">
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
