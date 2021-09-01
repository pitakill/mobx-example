import { createContext, useContext } from "react";
import store from "./store";

const useStore = () => useContext(createContext(store));

export default useStore;
