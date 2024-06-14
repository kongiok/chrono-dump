import { Container } from "@/components/parts/Container.part"
import { Timer } from "@/components/sections/Timer.section";
import { usePomodoroStore } from "@/store/utils.store.js";
import { useSearchParams } from "react-router-dom";

const TimerPage = () => {
  const { isRunning, currentTask, remainingTime, setTime, startPomodoro, pausePomodoro } = usePomodoroStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id") || "";
  usePomodoroStore.subscribe(
    (state) => {
      console.log(state);
    },
    (state) => {
      state.currentTask = id;
      // We'll get the task name from the supabase.
    }
  );
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
  )
}

export { TimerPage as Timer }
