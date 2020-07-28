import React from "react";
import styled, { css } from "styled-components";

const HeaderBar = styled.div`
  background: transparent;
  border-radius: 1px;
  border: 1px solid palevioletred;
  color: palevioletred;
  margin: 0px;
  padding: 5px;
  width: 100%;
  length: 100px;
  display: flex;
  flex-directly: row;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  return (
    <div style={{ width: "100%" }}>
      <HeaderBar>
        <div>Trello Clone Header Bar</div>
      </HeaderBar>
    </div>
  );
}
