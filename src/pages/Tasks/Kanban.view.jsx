import { useUserStore } from "@/utils/store/user.store";
import styled from "styled-components";

const Kanban = () => {

  return (
    <Board>
      <Column>
        <TitleColumn>Backlog</TitleColumn>
      </Column>
      <Column>
        <h1>Todo</h1>
      </Column>
      <Column>
        <h1>Doing</h1>
      </Column>
      <Column>
        <h1>Done</h1>
      </Column>
    </Board>
  )
}

const Board = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 1em;
  border-radius: 1em;
  box-shadow: 0 0 1em 0.5em #f5f5f5;
  @media (min-width: 768px){
    width: 95%;
    padding: 1em;
  }
  `;

const Column = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 1em;
  margin: 1em;
  border-radius: 1em;
  border: 1px solid #333;
  box-shadow: 0 0 1em 0.5em #f5f5f5;
  @media (min-width: 768px){
    width: 95svh;
    padding: 1em;
  }
  `;

const TitleColumn = styled.h3`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2em;
  font-weight: 700;
  margin: 1em;
  color: #3d3d3d;
  font-family: "GenSekiGothic", sans-serif;
  `;




export { Kanban };
