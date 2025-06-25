import { useRef, useEffect } from "react";

export const useScrollToBottom = (messages) => {
  console.log("useScrollToBottom start executing...");

  let scrollContainer = useRef();

  console.log(scrollContainer);

  useEffect(() => {
    if (!scrollContainer?.current) return;

    scrollContainer.current.scrollTo(0, scrollContainer.current.scrollHeight);
  }, [messages]);

  return scrollContainer;
};
