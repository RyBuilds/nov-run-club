import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = (props) => {
  const [theme, setTheme] = useState("light");

  return <Context.Provider value={{}}>{props.children}</Context.Provider>;
};

export const AppContext = () => {
  return useContext(Context);
};
