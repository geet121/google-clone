// after Search.js --> StateProvider  --> reducer.js


import React, { createContext, useContext, useReducer } from "react";

//Preparing the data layer
export const StateContext = createContext();

//hoc
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}  
  </StateContext.Provider>
);
//the children it is referring to is "App" (<App/>) in index.js
//initialState is what that data layer looks like when the app is loaded
//reducer is something which is clever and listens to changes


//this is a hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
