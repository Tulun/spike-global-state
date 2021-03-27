import React from 'react'

// Entirety of global state logic
const GlobalStateContext = React.createContext();
GlobalStateContext.displayName = "GlobalState";

export function GlobalStateProvider({children,defaultState,handlers}){
  const [state,dispatch] = React.useReducer(handlers,defaultState)
  const value = {state,dispatch,defaultState,handlers}
  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}
export function useGlobalState() {
  const context = React.useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within an GlobalStateProvider.");
  }
  return context;
}

// this can be moved to another file
export const handlers = (state, {type,data})=>{
  switch (type) {
    case "set": {
      return {
        ...state,
        ...data,
      };
    }
    default:{
      return {
        ...state,
        error:new Error('Unhandled reducer type: ' + type)
      }
    }
  }
}

// this can be moved as well
export const defaultState = {
  error:null,loading:false,users:null
}
