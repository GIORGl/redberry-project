import React, { useState, createContext } from "react";

export const context = createContext();

export function ContextProvider(props) {
  const [active, setActive] = useState(1);
  return (
  <context.Provider value={[active,setActive]}>
    {props.children}
  </context.Provider>
    );
}
