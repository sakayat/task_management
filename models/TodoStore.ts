import { types, Instance } from "mobx-state-tree";
import TodoModel from "./TodoModel";

type TodoType = {
  id?: number;
  title: string;
  description: string;
  selected: string;
};

const TodoStore = types
  .model("TodoStore", {
    todos: types.array(TodoModel),
  })
  .actions((self) => ({
    addTodo: (todo: TodoType) => {
      const newTodo = { ...todo };
      self.todos.push(newTodo);
    },
  }));

export type TodoStoreType = Instance<typeof TodoStore>;
export default TodoStore;
