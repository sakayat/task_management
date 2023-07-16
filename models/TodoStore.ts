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
    updatedTodo: (id: number, updated: TodoType) => {
      self.todos = self.todos.map((todo,index) => {
        if (index === id) {
          return updated;
        } else {
          return todo;
        }
      });
    },
    removeTodo: (id:number) => {
      self.todos = self.todos.filter((todo) => todo.id !== id);
    },
  }));

export type TodoStoreType = Instance<typeof TodoStore>;
export default TodoStore;
