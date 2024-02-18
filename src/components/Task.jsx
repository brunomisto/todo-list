const Task = ({ task, onDelete }) => {
  return (
    <li className={task.priority}>
      {task.name} <button onClick={onDelete}>delete</button>
    </li>
  );
};

export default Task;
