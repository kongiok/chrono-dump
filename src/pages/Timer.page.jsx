import { useEffect } from 'react';
import { Container } from "@/components/parts/Container.part";
import { Timer } from "@/components/sections/Timer.section";
import { usePomodoroStore } from "@/store/utils.store.js";
import { useSearchParams } from "react-router-dom";
import { getTaskById } from '../services/tasks.service';
import { useNavigate } from "react-router-dom";

const TimerPage = () => {
  const { isRunning, currentTask, remainingTime, setTime, startPomodoro, pausePomodoro, setCurrentTask } = usePomodoroStore();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = localStorage.getItem('currentTask') || searchParams.get('id');

  useEffect(() => {
    console.log('param', id);
    const currentTask = getTaskById(id);
    setCurrentTask(currentTask.title);
  }, [id, setCurrentTask]);

  return (
    <Container>
      <Timer
        title={currentTask}
        id={id}
        isRunning={isRunning}
        remainingTime={remainingTime}
        startPomodoro={startPomodoro}
        pausePomodoro={pausePomodoro}
        setTime={setTime}
      />
    </Container>
  );
};

export { TimerPage as Timer };
