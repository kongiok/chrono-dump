import React from "react";
import { Task } from "./Task.part";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;