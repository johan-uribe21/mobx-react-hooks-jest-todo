import { createContext } from "react";
import { observable, computed } from "mobx";

class TaskStore {
  @observable backlog = [];
  @observable todo = [
    "Go to Gym",
    "Call Columbia Gas",
    "Prepare for Upstart Interview",
  ];
  @observable doing = [];
  @observable done = [];

  @computed
  get remainingTodos() {
    return this.todos.length;
  }

  @computed
  get remainingDoing() {
    return this.doing.length;
  }

  @computed
  get getremainingDone() {
    return this.done.length;
  }
}

export const TaskStoreContext = createContext(new TaskStore());
