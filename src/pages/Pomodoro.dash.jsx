import styled from 'styled-components';
import { usePomodoroStore } from '../utils/store/utils.store';
import { useEffect } from 'react';

const Pomodoro = () => {
  const { isRunning, currentTask, remainingTime, setTime, pausePomodoro, startPomodoro } = usePomodoroStore(store => store);
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const interval = setInterval(() => {
      if (remainingTime === 0) {
        return clearInterval(interval);
      }
      setTime(remainingTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, remainingTime, setTime]);
  return (
    <Wrapper>
      <Panel>
        <Title>{currentTask === null ? "Start Your day" : currentTask}</Title>
        <ClockContainer>
          <Timer>{Math.floor(remainingTime / 60)
            .toString().padStart(2, '0')}:{(remainingTime % 60).toString().padStart(2, '0')}</Timer>
        </ClockContainer>
        <ControlContainer>
          {isRunning && <Button onClick={() => pausePomodoro()}>Pause</Button>}
          {!isRunning && <Button onClick={() => startPomodoro()}>Start</Button>}
        </ControlContainer>
      </Panel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Panel = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  border-radius: 1em;
  @media (min-width: 768px){
    width: 50%;
  }
  `;

const Title = styled.h1`
  font-size: 2em;
  font-weight: 700;
  color: var(--color-neutral);
  font-family: "GenSekiGothic", sans-serif;
  padding: 0.2em 1em;
  background-color: var(--color-neutral-bg);
  border-radius: 1em;
`;

const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-neutral-bg);
  border-radius: 100%;
  width: 50%;
  aspect-ratio: 1/1;
  margin: 1em;
  padding: 1em;
  @media (min-width: 768px){
    width: 65%;
    padding: 1em;
  }
`;

const Timer = styled.h1`
  font-size: 4em;
  font-weight: 700;
  color: var(--color-neutral);
  font-family: "GenSekiGothic", sans-serif;
`;

const ControlContainer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1em;
  border-radius: 1em;
`;

const Button = styled.button`
  padding: 1em;
  border-radius: 1em;
  background-color: var(--color-neutral-bg);
  color: var(--color-primary);
  font-size: 1em;
  font-weight: 700;
  font-family: "GenSekiGothic", sans-serif;
  border: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 0.2em var(--color-neutral-bg);
  }
`;

export { Pomodoro };
