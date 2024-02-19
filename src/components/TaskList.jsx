import Task from "./Task";

const TaskList = ({ tasks, onDelete, onCheck }) => {
  if (tasks.length === 0) {
    return <p>No tasks</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onCheck={() => onCheck(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
