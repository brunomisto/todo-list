import "./App.css";
import GitHubLogo from "./assets/github-mark.svg";
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
    tasksService.saveAll(newTasks);
  };

  return (
    <div id="app">
      <header>
        <h1>To do list</h1>
      </header>
      <main>
        <div id="content">
          <NewTaskForm onNewTask={handleNew} />
          <Tasks
            tasks={tasks}
            onDelete={handleDelete}
            onCheck={handleCheck}
            onChange={handleChange}
          />
        </div>
      </main>
      <footer>
        <span className="github">
          <a target="_blank" href="https://github.com/brunomisto/">
            <img src={GitHubLogo} alt="" />
            /brunomisto
          </a>
        </span>
      </footer>
    </div>
  );
};

export default App;
