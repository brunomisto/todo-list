const SortSelect = ({ sort, onChange }) => {
  return (
    <label>
      sort by
      <select value={sort} onChange={onChange}>
        <option value="">None</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="priority">Priority</option>
      </select>
    </label>
  );
};

export default SortSelect;
