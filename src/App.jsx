import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("low");
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      name: "wash the dishes",
      priority: "low",
    },
    {
      id: uuidv4(),
      name: "code",
      priority: "high",
    },
  ]);

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskPriorityChange = (event) => {
    setTaskPriority(event.target.value);
  };

  const handleNewTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      name: taskName,
      priority: taskPriority,
    };

    setTasks(tasks.concat(newTask));
    setTaskName("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To do list</h1>
      <form onSubmit={handleNewTask}>
        <h2>Add task</h2>
        <label>
          Task name
          <input value={taskName} onChange={handleTaskNameChange} />
        </label>
        <label>
          Priority
          <select value={taskPriority} onChange={handleTaskPriorityChange}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
      </form>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}{" "}
            <button onClick={() => handleDeleteTask(task.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
