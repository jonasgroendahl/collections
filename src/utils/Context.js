import React, { useState } from "react";

const Context = React.createContext();

export const Consumer = Context.Consumer;

export function ContextProvider({ children }) {
  const [selectedClient, setSelectedClient] = useState(0);

  const props = { selectedClient, setSelectedClient };

  return <Context.Provider value={props}>{children}</Context.Provider>;
}

export default Context;
