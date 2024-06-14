import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styled from 'styled-components';

export const Timer = ({
  title,
  isRunning,
  remainingTime,
  startPomodoro,
  pausePomodoro,
  setTime
}) => {
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const interval = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(interval);
        pausePomodoro();
        return;
      }
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, remainingTime, pausePomodoro, setTime]);
  return (
    <Card>
      <TimerTitle>{title}</TimerTitle>
      <TimerButtonGroup>
        <TimerButton onClick={startPomodoro}>Start</TimerButton>
        <TimerButton onClick={pausePomodoro}>Pause</TimerButton>
      </TimerButtonGroup>
    </Card>
  )
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 0.25em;
  border-radius: 1em;
  background-color: var(--color-primary-bg);
`;

const TimerTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  color: var(--color-neutral);
  margin: 0.5em;
`;

const TimerButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0.5em;
`;

const TimerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 0.5em;
  border: none;
  border-radius: 0.5em;
  background-color: var(--color-primary);
  color: var(--color-neutral);
  font-family: 'GenSekiGothic' sans-serif;
  font-size: 1em;
  font-weight: 700;
  margin: 0.25em;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: darken(var(--color-primary), 10%);
  }
`;


Timer.propTypes = {
  title: PropTypes.string,
  isRunning: PropTypes.bool,
  remainingTime: PropTypes.number,
  startPomodoro: PropTypes.func,
  pausePomodoro: PropTypes.func,
  setTime: PropTypes.func
};
