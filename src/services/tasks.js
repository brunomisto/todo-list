const saveAll = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const getAll = () => {
  const notesString = localStorage.getItem("notes");
  if (!notesString) return [];
  return JSON.parse(notesString);
};

export default { saveAll, getAll };
