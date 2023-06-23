import React from "react";

function Task({ task, onDelete }) {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="Task">
      <span>{task.text}</span>
      <span>{task.category}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
