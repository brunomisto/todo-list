import { useState } from "react";

import PrioritySelect from "./PrioritySelect";
import TaskList from "./TaskList";
import SortSelect from "./SortSelect";

const Tasks = ({ tasks, onDelete, onCheck, onChange }) => {
  const [priority, setPriority] = useState("");
  const [sort, setSort] = useState("");

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const priorityValue = {
    low: 1,
    medium: 2,
    high: 3,
  };

  const tasksToShow = tasks
    .filter((task) => task.priority.includes(priority))
    .toSorted((a, b) => {
      if (sort === "alphabetical") {
        return a.name < b.name ? -1 : 1;
      }
      if (sort === "priority") {
        return priorityValue[b.priority] - priorityValue[a.priority];
      }
    });

  return (
    <div id="tasks">
      <h2>Tasks</h2>
      <div className="controls">
        <PrioritySelect priority={priority} onChange={handlePriorityChange} />
        <SortSelect sort={sort} onChange={handleSortChange} />
      </div>
      <TaskList
        tasks={tasksToShow}
        onDelete={onDelete}
        onCheck={onCheck}
        onChange={onChange}
      />
    </div>
  );
};

export default Tasks;
