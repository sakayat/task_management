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
      localStorage.setItem("todos", JSON.stringify(self.todos))
    },
    updatedTodo: (id: number, updated: TodoType) => {
      const todo = self.todos.find((_, index) => index === id);
      if (todo) {
        todo.setTitle(updated.title);
        todo.setDescription(updated.description);
        todo.setSelected(updated.selected);
      }
      localStorage.setItem("todos", JSON.stringify(self.todos));
    },
    removeTodo: (id: number) => {
      self.todos = self.todos.filter((_, index) => index !== id);
      localStorage.removeItem("todos");
    },
  }));

export type TodoStoreType = Instance<typeof TodoStore>;
export default TodoStore;
