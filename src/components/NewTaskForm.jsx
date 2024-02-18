const NewTaskForm = ({
  name,
  priority,
  onNewTask,
  onNameChange,
  onPriorityChange,
}) => {
  return (
    <form onSubmit={onNewTask}>
      <h2>Add task</h2>
      <div>
        <label>
          Task name
          <input value={name} onChange={onNameChange} />
        </label>
      </div>
      <div>
        <label>
          Priority
          <select value={priority} onChange={onPriorityChange}>
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
