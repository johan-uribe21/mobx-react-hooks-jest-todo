import React from "react";
import styled from "styled-components";
import Header from "components/organisms/layout/Header";
import SideBar from "components/organisms/layout/SideBar";
import MainPage from "components/organisms/layout/MainPage";

const PageContainer = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export default function Layout() {
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <SideBar />
        <MainPage />
      </MainContainer>
    </PageContainer>
  );
}
