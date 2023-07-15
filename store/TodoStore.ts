import TodoModel from "@/model/TodoModel";
import { types, Instance } from "mobx-state-tree";

const TodoStore = types
  .model("TodoStore", {
    todos: types.array(TodoModel),
  })
  .actions((self) => ({
    addTodo: (todo: Instance<typeof TodoModel>) => {
        const item = {
          ...todo,
        };
        self.todos.push(item);
      },
  }));

export default TodoStore;
