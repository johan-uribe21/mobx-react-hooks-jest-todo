import React from "react";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";

const ColumnContainer = styled.div`
  color: black;
  padding: 12.5px;
  width: 25%;
  length: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ColumnContents = styled.div`
  border-radius: 3px;
  border: 1px solid green;
  color: black;
  width: 100%;
  length: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TaskContainer = styled.div`
  color: black;
  width: 100%;
  length: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = observer(
  ({ tasks, moveLeft, moveRight, columnIndex, columnTitle }) => {
    return (
      <ColumnContainer>
        <ColumnContents>
          {columnTitle}
          {tasks.map((task, taskIndex) => {
            return (
              <TaskContainer key={taskIndex}>
                <button
                  disabled={moveLeft ? false : true}
                  onClick={() => moveLeft(columnIndex, taskIndex)}
                >
                  {"<-"}
                </button>
                <span>
                  {taskIndex}: {task}
                </span>
                <button
                  disabled={moveRight ? false : true}
                  onClick={() => moveRight(columnIndex, taskIndex)}
                >
                  {"->"}
                </button>
              </TaskContainer>
            );
          })}
        </ColumnContents>
      </ColumnContainer>
    );
  }
);
