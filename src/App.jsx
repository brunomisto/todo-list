import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";

const App = () => {
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

  const handleNewTask = (task) => {
    setTasks(tasks.concat(task));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To do list</h1>
      <NewTaskForm onNewTask={handleNewTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
