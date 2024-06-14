import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Timer = ({ title, isRunning, remainingTime, startPomodoro, pausePomodoro, setTime }) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <TimerContainer>
      <TaskTitle>{title}</TaskTitle>
      <TimeDisplay>{formatTime(remainingTime)}</TimeDisplay>
      <ButtonContainer>
        {isRunning ? (
          <ControlButton onClick={pausePomodoro}>Pause</ControlButton>
        ) : (
          <ControlButton onClick={startPomodoro}>Start</ControlButton>
        )}
      </ButtonContainer>
    </TimerContainer>
  );
};

Timer.propTypes = {
  title: PropTypes.string,
  isRunning: PropTypes.bool,
  remainingTime: PropTypes.number,
  startPomodoro: PropTypes.func,
  pausePomodoro: PropTypes.func,
  setTime: PropTypes.func
};

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TaskTitle = styled.h1`
  margin-bottom: 20px;
`;

const TimeDisplay = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ControlButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export { Timer };