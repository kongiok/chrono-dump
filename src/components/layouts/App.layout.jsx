import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sections/Sidebar.section.jsx";
import styled from "styled-components";
import { useUserStore } from "../../store/user.store";
import { Navigate } from "react-router-dom";
import { createTasks, sampleTasks } from "../../services/tasks.service";

const Base = () => {
  const { isLogin } = useUserStore();

  if (!isLogin) {
    Navigate('/login');
  }

  return (
    <Panel>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
      <FAB onClick={() => { createTasks(sampleTasks) }}>+</FAB>
    </Panel>
  )
}

const Panel = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100svh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  background-color: #f5f5f5;
`;

const Main = styled.main`
  width: 85%;
  height: 95svh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: .5em;
  padding: 0.5em;
  border-radius: 1em;
  overflow: auto;
  @media (min-width: 768px){
    width: 95%;
    padding: 1em;
  }
  `;

const FAB = styled.button`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #0056b3;
  }
`;


export { Base };
