import styled, { css } from "styled-components";
import { useTasksStore } from "@/utils/store/tasks.store";
import { useUserStore } from "@/utils/store/user.store";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Error } from "../../components/parts/Error.part";
import { fetchTasks } from "../../services/tasks.service.js";
import { useDialogStore } from "@/utils/store/utils.store.js";

export const Inbox = () => {
  const { tasks, setTasks } = useTasksStore(state => state);
  const { token } = useUserStore();
  const { toggleDialog } = useDialogStore();
  const { isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const tasks = await fetchTasks(token)
      console.log(token)
      await setTasks(tasks);
      return tasks;
    },
    onError: (error) => {
      console.log(error)
    }
  });
  // const navigate = useNavigate();
  // useEffect(() => {
  //   // if (token === null) {
  //   //   navigate("/app/login");
  //   // }
  // }, [data, setTasks, token, navigate]);
  if (isLoading) {
    return <Skeleton count={10} />;
  }
  if (isError) {
    return <Error title="Can't Fetch Task" />;
  }
  return (
    <>
      <InboxTitle>Inbox</InboxTitle>
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          title={task.title}
          expiredDate={Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(task.deadline))}
          priority={task.priority}
          progress={task.progress}
        />
      ))}
      {/* <PopupContainer>
        <PopupForm>
          <PopupTitle>Task Title</PopupTitle>
          <PopupInput type="text" />
          <PopupTitle>Task Description</PopupTitle>
          <PopupInput type="text" />
          <PopupTitle>Task Deadline</PopupTitle>
          <PopupInput type="date" />
          <PopupTitle>Task Priority</PopupTitle>
          <PopupInput type="number" />
          <PopupTitle>Task Progress</PopupTitle>
          <PopupInput type="number" />
        </PopupForm>
        <PopupButton>Submit</PopupButton>
      </PopupContainer> */}
      <FABButton>+</FABButton>
    </>
  );
}

const TaskCard = styled.div`
  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  padding: 1em;
  margin: 1em 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-color: var(--color-neutral);
  ${$props => $props.priority === 3 && css`
    background-color: var(--color-error-bg);
    ` || $props.priority === 2 && css`
      background-color: var(--color-warning-bg);
      ` || $props.priority === 1 && css`
        background-color: var(--color-success-bg);
        ` || css`
          background-color: var(--color-neutral-bg);
          ` }
`;

const Title = styled.h3`
  font-size: 1.3em;
  font-weight: bold;
  color: var(--color-neutral);
  font-family: "GenSekiGothic", sans-serif;
`;

const ExpiredDate = styled.p`
  font-size: 1.2em;
  margin-bottom: 0;
  font-family: "GenWanMin", serif;
  font-weight: bold;

  ${({ priority }) => priority === 3 && css`
    color: #721c24;
    ` || priority === 2 && css`
      color: #004085;
      ` || priority === 1 && css`
        color: #856404;
        ` || css`
          color: #155724;
          ` }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  margin-top: 16px;
  align-self: flex-end;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ progress }) => `${progress}%`};
    height: 100%;
    background-color: #4caf50;
  }
`;

const TaskComponent = ({ title, expiredDate, priority, progress }) => {
  return (
    <TaskCard priority={priority}>
      <Title>{title}</Title>
      <ExpiredDate priority={priority}>{expiredDate}</ExpiredDate>
      <Avatar progress={progress} />
    </TaskCard>
  );
};

const InboxTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupForm = styled.form`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PopupTitle = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const PopupInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const PopupButton = styled.button`
  padding: 8px 16px;
  background-color: var(--color-primary);
  color: white;
  border: none;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const FABButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  font-size: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
