import { useStore } from "@/contexts/StoreContext";
import { observer } from "mobx-react";

const TaskList: React.FC = observer(() => {
  const todoStore = useStore();
  return (
    <div className="task-card py-5">
      <h2 className="text-3xl border-b pb-5">Task List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        {todoStore.todos.map((todo, id) => (
          <div
            key={todo.id}
            className="flex flex-col justify-between gap-5 bg-white text-black rounded-md shadow-lg p-5"
          >
            <div className="w-full h-full">
              <h2 className="text-2xl">{todo.title}</h2>
              <p className="my-5 text-justify">{todo.description}</p>
              <span
                className={`px-3 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  todo.selected === "completed"
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {todo.selected === "completed" ? "coompleted" : "In Progress"}
              </span>
            </div>
            <div className="button flex justify-between">
              <button className="bg-black text-white py-2 px-6 rounded-md">
                Edit
              </button>
              <button className="bg-black text-white py-2 px-6 rounded-md">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TaskList;
