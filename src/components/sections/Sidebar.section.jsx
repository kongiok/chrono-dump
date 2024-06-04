import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MdHome } from "react-icons/md";
import { NavItem } from "@/utils/types";

const SidebarPanel = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: #f5f5f5;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 15%;
  height: 100svh;
  transition: width 0.2s;
  &:hover, &:is(a:hover, nav:hover, a:focus) {
    width: 45%;
    p, h2 {
      display: block;
      visibility: visible;
    }
    nav {
      align-items: start;
    }
  }
  & > h2 {
    visibility: hidden;
  }

  @media (min-width: 768px){
    width: 5%;
    &:hover, &:is(a:hover, nav:hover, a:focus) {
      width: 15%;
    }
  }
  `;
const NavSection = styled.nav`
  display: flex;
  width: 100%;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const NavTitle = styled.h2`
  font-size: 1.15em;
  font-weight: 700;
  margin: 2em 1.25em;
  color: #3d3d3d;
  font-family: "GenSekiGothic", sans-serif;
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  color: var(--color-netural);
  font-weight: 700;
  font-size: 1.5em;
  margin: 1.25em;
  transition: color 0.2s;
  & > p {
    display: none;
    font-size: 0.7em;
    margin: 0;
  }
  & > span {
    margin-right: 0.25em;
  }
  &:hover {
    color: var(--color-primary);
  }
`;

const Sidebar = ({ navItem }) => {
  return (
    <SidebarPanel>
      <NavTitle>App</NavTitle>
      <NavSection>
        <NavLink to="/app" title="Home"><span><MdHome /></span><p>Home</p></NavLink>
      </NavSection>
      <NavTitle>Functions</NavTitle>
      <NavSection>
        {navItem?.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            title={item.title}
          >
            <span>{item.icon}</span><p>{item.title}</p>
          </NavLink>))}
      </NavSection>
    </SidebarPanel>
  )
}

Sidebar.propTypes = {
  navItem: PropTypes.arrayOf(
    NavItem
  ).isRequired,
};

export { Sidebar };
