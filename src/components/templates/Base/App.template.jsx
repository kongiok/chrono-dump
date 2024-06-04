import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sections/Sidebar.section.jsx";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NavItem } from "@/utils/types";

const Panel = styled.div`
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  background-color: #f5f5f5;
`;

const Main = styled.main`
  width: 85%;
  height: 100svh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: .5em;
  padding: 0.5em;
  border-radius: 1em;
  @media (min-width: 768px){
    width: 95%;
    padding: 1em;
  }
  `;

const Base = ({ navItem }) => {

  return (
    <Panel>
      <Sidebar navItem={navItem} />
      <Main>
        <Outlet />
      </Main>
    </Panel>
  )
}

Base.propTypes = {
  navItem: PropTypes.arrayOf(PropTypes.shape({
    NavItem
  })).isRequired,
};

export { Base };
