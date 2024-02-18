import { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDelete }) => {
  const [priority, setPriority] = useState("");

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const tasksToShow = tasks.filter((task) => task.priority.includes(priority));
  return (
    <div>
      <h2>Tasks</h2>
      <label>
        Show by priority
        <select value={priority} onChange={handlePriorityChange}>
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>
      {tasksToShow.length > 0 ? (
        <ul>
          {tasksToShow.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={() => onDelete(task.id)}
            />
          ))}
        </ul>
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
};

export default TaskList;
