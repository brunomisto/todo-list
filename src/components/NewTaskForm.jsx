import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const NewTaskForm = ({ onNewTask }) => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("low");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleNewTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      name,
      priority,
    };

    onNewTask(newTask);

    setName("");
  };

  return (
    <form onSubmit={handleNewTask}>
      <h2>Add task</h2>
      <div>
        <label>
          Task name
          <input required value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Priority
          <select value={priority} onChange={handlePriorityChange}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
      </div>
      <button type="submit">New task</button>
    </form>
  );
};

export default NewTaskForm;
