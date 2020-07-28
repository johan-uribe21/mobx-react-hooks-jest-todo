import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import AboutPage from "pages/AboutPage";
import { TodoPage } from "pages/TodoPage";

const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function MainPage() {
  return (
    <MainPageContainer>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/todo">
          <TodoPage />
        </Route>
        <Route path="/">
          <TodoPage />
        </Route>
      </Switch>
    </MainPageContainer>
  );
}
