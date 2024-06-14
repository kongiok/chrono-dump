import React from 'react';
import TaskList from '../../parts/TaskList';

// This File is used to display the index page of the application
const Index = ({ tasks }) => {
  return (
    <div>
      <h1>Index</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export { Index as IndexPage }