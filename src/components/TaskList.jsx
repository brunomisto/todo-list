import Task from "./Task";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => onDelete(task.id)} />
      ))}
    </ul>
  );
};

export default TaskList;
