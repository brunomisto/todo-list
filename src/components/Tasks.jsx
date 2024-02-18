import { useState } from "react";

import PrioritySelect from "./PrioritySelect";
import TaskList from "./TaskList";

const Tasks = ({ tasks, onDelete }) => {
  const [priority, setPriority] = useState("");

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const tasksToShow = tasks.filter((task) => task.priority.includes(priority));
  return (
    <div>
      <h2>Tasks</h2>
      <PrioritySelect priority={priority} onChange={handlePriorityChange} />
      <TaskList tasks={tasksToShow} onDelete={onDelete} />
    </div>
  );
};

export default Tasks;
