import React, { useEffect } from 'react';
import { Container } from "@/components/parts/Container.part";
import { Timer } from "@/components/sections/Timer.section";
import { usePomodoroStore } from "@/store/utils.store.js";
import { useSearchParams } from "react-router-dom";

const TimerPage = () => {
  const { isRunning, currentTask, remainingTime, setTime, startPomodoro, pausePomodoro, setCurrentTask } = usePomodoroStore();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "";

  useEffect(() => {
    const fetchTaskName = async (taskId) => { return `Task #${taskId}`; };
    const loadTask = async () => {
      if (id) {
        const taskName = await fetchTaskName(id);
        setCurrentTask(taskName);
      }
    };
    loadTask();
  }, [id, setCurrentTask]);

  return (
    <Container>
      <Timer
        title={currentTask}
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