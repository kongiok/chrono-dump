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

  </TaskCard>
)

const TaskCard = styled.section`
  display: flex;
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
