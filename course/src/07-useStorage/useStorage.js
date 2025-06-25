import { useState, useEffect } from "react";

export const useStorage = (key, initialState) => {
  console.log("useStorage start executing...");

  let [state, setState] = useState(initialState);

  useEffect(() => {
    console.log("useEffect start executing...");

    let existingState = localStorage.getItem(key);

    if (existingState) setState(JSON.parse(existingState));
  }, [key]);

  return [
    state,
    (state) => {
      setState(state);
      localStorage.setItem(key, JSON.stringify(state));
    },
  ];
};
