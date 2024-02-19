import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import NewTaskForm from "./components/NewTaskForm";
import tasksService from "./services/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasksService.getAll().length === 0) {
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
      setTasks(tasksService.getAll());
    }
  }, []);

  const handleNew = (task) => {
    const newTasks = tasks.concat(task);
    setTasks(tasks.concat(task));
    tasksService.saveAll(newTasks);
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    tasksService.saveAll(newTasks);
  };

  const handleCheck = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });

    setTasks(newTasks);
    tasksService.saveAll(newTasks);
  };

  const handleChange = (id, priority) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, priority };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
    tasksService.saveAll();
  };

  return (
    <div>
      <h1>To do list</h1>
      <NewTaskForm onNewTask={handleNew} />
      <Tasks
        tasks={tasks}
        onDelete={handleDelete}
        onCheck={handleCheck}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
