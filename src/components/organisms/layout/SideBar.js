import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SideBarContainer = styled.div`
  margin: 0px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 150px;
  height: 100%;
  border-right: 1px solid palevioletred;
`;

export const NavElement = styled(Link)`
  color: black;
  font-size: 16px;
  border-bottom: 0px solid black;
  margin-bottom: 8px;
  text-decoration: none;

  ${(props) =>
    props.active &&
    css`
      color: palevioletred;
      text-decoration: underline;
    `};
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 8px;
`;

export default function SideBar() {
  const [isActive, setActive] = useState(false);

  function onMouseEnter() {
    setActive(true);
  }

  function onMouseLeave() {
    setActive(false);
  }

  return (
    <SideBarContainer>
      <NavContainer>
        <NavElement
          active={isActive ? "yes" : null}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          to="/"
        >
          Home
        </NavElement>
        <NavElement
          active={isActive ? "yes" : null}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          to="/about"
        >
          About
        </NavElement>
        <NavElement
          active={isActive ? "yes" : null}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          to="/todo"
        >
          Todo
        </NavElement>
      </NavContainer>
    </SideBarContainer>
  );
}
