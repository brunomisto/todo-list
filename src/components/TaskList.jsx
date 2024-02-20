import { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDelete, onCheck, onChange }) => {
  const [selected, setSelected] = useState(null);

  if (tasks.length === 0) {
    return <p style={{ textAlign: "center" }}>No tasks</p>;
  }

  return (
    <ul id="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onCheck={() => onCheck(task.id)}
          onChange={onChange}
          selected={task.id === selected}
          setSelected={setSelected}
        />
      ))}
    </ul>
  );
};

export default TaskList;
