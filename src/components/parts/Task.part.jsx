import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Task = ({
  id,
  title,
  description,
  status,
  priority,
  startDate,
  dueDate,
  timeSpent
}) => {
  const navigate = useNavigate();

  const handleStartTimer = () => {
    navigate(`/app/timer?id=${id}`, { replace: false });
    localStorage.setItem('currentTask', id);
  };

  return (
    <TaskCard>
      <TaskHeader>
        <TaskTitle>{title}</TaskTitle>
        <TaskStatus>Status: {status}</TaskStatus>
      </TaskHeader>
      <TaskBody>
        <TaskDescription>{description}</TaskDescription>
        <TaskDetails>
          <TaskDetail><strong>Deadline:</strong> {dueDate}</TaskDetail>
          <TaskDetail><strong>Time Spent:</strong> {timeSpent} hrs</TaskDetail>
        </TaskDetails>
        <StartTimerButton onClick={handleStartTimer}>Start Timer</StartTimerButton>
      </TaskBody>
    </TaskCard>
  );
};

const TaskCard = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const TaskStatus = styled.span`
  font-size: 0.9em;
  color: #666;
`;

const TaskBody = styled.div`
  margin-top: 16px;
`;

const TaskDescription = styled.p`
  margin: 0 0 8px 0;
`;

const TaskDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TaskDetail = styled.div`
  font-size: 0.9em;
`;

const StartTimerButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.number,
  priority: PropTypes.number,
  startDate: PropTypes.string,
  dueDate: PropTypes.string,
  timeSpent: PropTypes.number
};
