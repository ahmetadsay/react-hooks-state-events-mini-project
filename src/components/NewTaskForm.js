import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuid(),
      text: taskText,
      category: taskCategory,
    };
    onTaskFormSubmit(newTask);
    setTaskText("");
    setTaskCategory(categories[0]);
  };

  return (
    <form className="NewTaskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <select
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
