import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";

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
      <NewTaskForm
        name={taskName}
        priority={taskPriority}
        onNameChange={handleTaskNameChange}
        onNewTask={handleNewTask}
        onPriorityChange={handleTaskPriorityChange}
      />
      <h2>Tasks</h2>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
