"use client";
import TodoStore from "@/models/TodoStore";
import StoreContext from "./StoreContext";
import { ReactNode, useEffect } from "react";

interface Todo {
  id?: number;
  title: string;
  description: string;
  selected: string;
}

type StoreProviderProps = {
  children: ReactNode;
};

const todoStore = TodoStore.create();

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  useEffect(() => {
    const getTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") as string
    );
    if (getTodos) {
      getTodos.forEach((todo) => {
        todoStore.addTodo(todo);
      });
    }
  }, [todoStore]);
  return (
    <StoreContext.Provider value={todoStore}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
