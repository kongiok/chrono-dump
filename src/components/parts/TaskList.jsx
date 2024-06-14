import React from "react";
import { Task } from "./Task.part";
import styled from "styled-components";

const TaskList = ({ tasks }) => {
  return (
    <TaskGrid>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </TaskGrid>
  );
};

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export default TaskList;