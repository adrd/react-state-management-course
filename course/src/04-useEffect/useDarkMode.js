import { useEffect, useState } from "react";

let initiallyDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const useDarkMode = () => {
  console.log("useDarkMode start executing...");

  let [dark, setDark] = useState(initiallyDark);

  const listener = (event) => {
    console.log("listener callback start executing...");
    setDark(event.matches);
  };

  useEffect(() => {
    console.log("useEffect start executing - subscribe to event...");

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);

    return () => {
      console.log("useEffect stop executing - unsubscribe from event...");
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
    };
  }, []);

  return dark;
};
