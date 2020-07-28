import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { TaskStoreContext } from "stores/TaskStore";
import { Column } from "components/organisms/Column";
import styled, { css } from "styled-components";

const ColumnsContainer = styled.div`
  width: 100%;
  length: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const columns = [
  { label: "Backlog", store: "backlog" },
  { label: "To Do", store: "todo" },
  { label: "Doing", store: "doing" },
  { label: "Done", store: "done" },
];

export const TodoPage = observer(() => {
  const taskStore = useContext(TaskStoreContext);

  function removeFromStore(columnIndex, taskIndex) {
    const currentStoreKey = columns[columnIndex].store;
    taskStore[currentStoreKey].splice(taskIndex, 1);
  }

  function addToStore(fromColumnIndex, toColumnIndex, taskIndex) {
    const currentStoreKey = columns[fromColumnIndex].store;
    console.log("currentStoreKey", currentStoreKey);
    const task = taskStore[currentStoreKey][taskIndex];
    console.log("task", task);
    const newStoreKey = columns[toColumnIndex].store;
    taskStore[newStoreKey].push(task);
  }

  function moveLeft(columnIndex, taskIndex) {
    addToStore(columnIndex, columnIndex - 1, taskIndex);
    removeFromStore(columnIndex, taskIndex);
  }

  function moveRight(columnIndex, taskIndex) {
    console.log("columnIndex", columnIndex);
    console.log("taskIndex", taskIndex);
    addToStore(columnIndex, columnIndex + 1, taskIndex);
    removeFromStore(columnIndex, taskIndex);
  }

  return (
    <div style={{ padding: "12.5px" }}>
      <h2>Welcome to the todo page!</h2>
      <p>You have {taskStore.remainingDoing} left to finish!</p>
      <ColumnsContainer>
        {columns.map((column, index) => {
          return (
            <Column
              key={index}
              columnTitle={columns[index].label}
              tasks={taskStore[column.store]}
              columnIndex={index}
              moveLeft={index > 0 ? moveLeft : null}
              moveRight={index < columns.length - 1 ? moveRight : null}
            />
          );
        })}
      </ColumnsContainer>
    </div>
  );
});
