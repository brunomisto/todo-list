import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleNewTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      name: taskName,
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
