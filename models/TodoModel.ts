import { types } from "mobx-state-tree";

const TodoModel = types
  .model("Todo", {
    id: types.optional(types.number, () => Date.now()),
    title: types.string,
    description: types.string,
    selected: types.string,
  })
  .actions((self) => ({
    setTitle(title: string) {
      self.title = title;
    },
    setDescription(description: string) {
      self.description = description;
    },
    setSelected(selected: string) {
      self.selected = selected;
    },
  }));

export default TodoModel;
