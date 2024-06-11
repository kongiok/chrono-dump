import { useEffect } from "react";
import { taskViewStore } from "@/utils/store/tasks.store";
import { useSearchParams } from "react-router-dom";
import { TaskView } from "@/utils/types";
import { Calendar as CalendarView } from "./Calendar.view.jsx";
import { Inbox as InboxView } from "./Inbox.view.jsx";


const Task = () => {
  const { taskView, setTaskView } = taskViewStore();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!searchParams.get("view")) {
      setTaskView(TaskView.INBOX);
      return;
    }
    const view = searchParams.get("view").toUpperCase();
    if (!Object.values(TaskView).includes(view)) {
      setTaskView(TaskView.INBOX);
      return;
    }
    setTaskView(view);
  }
    , [searchParams, setTaskView]);
  useEffect(() => {
    setSearchParams({ view: taskView.toLowerCase() });
  }, [taskView, setSearchParams]);

  switch (taskView) {
    case TaskView.INBOX:
      return <InboxView />;
    case TaskView.CALENDAR:
      return <CalendarView />;
    case TaskView.QUARDRANT:
      return <h1>Quadrant</h1>;
    default:
      return <h1>Task</h1>;
  }
}

export { Task };
