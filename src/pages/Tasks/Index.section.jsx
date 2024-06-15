import styled from 'styled-components';
import { Task } from '@/components/parts/Task.part';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { getAllTasks } from '../../services/tasks.service';

const Index = () => {
  const { data: tasks, status } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const id = localStorage.getItem('user');
      const { data: tasks } = await getAllTasks(id);
      return tasks;
    },
    initialData: [],
  });

  if (status === 'pending') {
    return <h1>Loading...</h1>
  }
  if (status === 'error') {
    return <h1>Error</h1>
  }
  if (status === 'success' && !tasks?.length === 0) {
    return <h1>No tasks</h1>
  }

  return (
    <div>
      <h1>Index</h1>
      <TaskGrid>
        {status === 'success' && tasks?.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </TaskGrid>
    </div>
  );
}

Index.propTypes = {
  tasks: PropTypes.array,
}

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;


export { Index as IndexPage }
