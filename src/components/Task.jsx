const Task = ({ task, onDelete, onCheck }) => {
  const classes = `task ${task.priority} ${task.checked ? "check" : "uncheck"}`;
  return (
    <li>
      <span className={classes} onClick={onCheck}>
        {task.name}
      </span>
      <button onClick={onDelete}>delete</button>
    </li>
  );
};

export default Task;
