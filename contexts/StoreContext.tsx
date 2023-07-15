import { createContext, useContext } from "react";
import { TodoStoreType } from "../models/TodoStore";

const StoreContext = createContext<TodoStoreType | null>(null);

export const useStore = (): TodoStoreType => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};

export default StoreContext;
