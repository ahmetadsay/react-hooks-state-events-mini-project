import React from "react";
import Task from "./Task";
import { useState } from "react";
function TaskList({ tasks }) {
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const deleteTask = (taskId) => {
    const updatedTasks = filteredTasks.filter((task) => task.id !== taskId);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="TaskList">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
