import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import NewTaskForm from "./components/NewTaskForm";
import notes from "./services/notes";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (notes.getAll().length === 0) {
      setTasks([
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
    } else {
      setTasks(notes.getAll());
    }
  }, []);

  const handleNewTask = (task) => {
    const newTasks = tasks.concat(task);
    setTasks(tasks.concat(task));
    notes.saveAll(newTasks);
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    notes.saveAll(newTasks);
  };

  const handleCheckTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });

    setTasks(newTasks);
    notes.saveAll(newTasks);
  };

  return (
    <div>
      <h1>To do list</h1>
      <NewTaskForm onNewTask={handleNewTask} />
      <Tasks
        tasks={tasks}
        onDelete={handleDeleteTask}
        onCheck={handleCheckTask}
      />
    </div>
  );
};

export default App;
