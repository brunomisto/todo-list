const saveAll = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getAll = () => {
  const tasksString = localStorage.getItem("tasks");
  if (!tasksString) return [];
  return JSON.parse(tasksString);
};

export default { saveAll, getAll };
