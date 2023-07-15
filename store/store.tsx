"use client";
import { createContext, useContext, ReactNode } from "react";
import { Instance } from "mobx-state-tree";
import TodoStore from "./TodoStore";

type TodoStoreType = Instance<typeof TodoStore>;

interface StoreContextProps {
  todoStore: TodoStoreType;
}

const StoreContext = createContext<StoreContextProps | null>(null);

const useStore = (): StoreContextProps | null => useContext(StoreContext);

const todoStore = TodoStore.create();

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={{ todoStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export { useStore };
