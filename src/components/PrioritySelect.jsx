const PrioritySelect = ({ priority, onChange }) => {
  return (
    <label>
      Show by priority
      <select value={priority} onChange={onChange}>
        <option value="">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </label>
  );
};

export default PrioritySelect;
