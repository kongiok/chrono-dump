import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Task = ({
  id,
  title,
  description,
  status,
  priority,
  startDate,
  dueDate,
  timeSpent
}) => (
  <TaskCard>
    <TaskHeader>
      <TaskTitle>{title}</TaskTitle>
      <TaskStatus>Status: {status}</TaskStatus>
    </TaskHeader>
    <TaskBody>
      <TaskDescription>{description}</TaskDescription>
      <TaskDetails>
        <TaskDetail><strong>Priority:</strong> {priority}</TaskDetail>
        <TaskDetail><strong>Start Date:</strong> {startDate}</TaskDetail>
        <TaskDetail><strong>Due Date:</strong> {dueDate}</TaskDetail>
        <TaskDetail><strong>Time Spent:</strong> {timeSpent} hrs</TaskDetail>
      </TaskDetails>
    </TaskBody>
  </TaskCard>
);

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
