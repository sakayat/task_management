"use client";
import { useStore } from "@/contexts/StoreContext";
import { observer } from "mobx-react";
import { useState } from "react";
import TaskList from "./TaskList";

const TaskForm: React.FC = observer(() => {

  const todoStore = useStore();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selected, setSelected] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoObj = { title, description, selected };
    todoStore.addTodo(todoObj);
  };

  const handleEdit = (id: number) => {
    const todo = todoStore.todos[id];
    setTitle(todo.title);
    setDescription(todo.description);
    setSelected(todo.selected);
  }

  return (
    <div className="task-form">
      <div className="flex justify-end">
        <button className="bg-white text-black px-6 py-5 mt-5 w-1/3 rounded-md text-sm">
          Add task
        </button>
      </div>
      <form
        className="flex flex-col justify-center gap-5 h-[calc(100vh-15rem)]"
        onSubmit={handleSubmit}
      >
        <div className="form-control space-y-5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="title"
            className="outline-none py-4 px-6 text-black rounded-md w-full"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
        <div className="form-control space-y-5">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="description"
            className="outline-none py-4 px-6 text-black rounded-md w-full"
            rows={6}
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
          />
        </div>
        <div className="form-control space-y-5">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            className="py-4 px-6 text-black rounded-md appearance-none focus:outline-none w-full"
            value={selected}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelected(e.target.value)
            }
          >
            <option selected>Select</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button className="w-fit bg-white text-black py-4 px-6 rounded-md">
          Add Task
        </button>
      </form>
      <TaskList handleEdit={handleEdit}/>
    </div>
  );
});

export default TaskForm;
