import { useSearchParams } from "react-router-dom";
import { useTasksStore } from "../../store/tasks.store";
import { IndexPage } from "../sections/Tasks/Index.section";
import { Container } from "../parts/Container.part";

const CurrentTaskView = ({ view, tasks }) => {
  switch (view.toLowerCase()) {
    case "calendar":
      return <h1>Calendar View</h1>
    case "index":
    default:
      return <IndexPage tasks={tasks} />
  }
}

export const TaskDash = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get("view") || "index";
  const tasks = useTasksStore((state) => state.tasks);
  return (
    <Container>
      <CurrentTaskView view={view} tasks={tasks} />
    </Container>
  );
};
