import { useState } from "react";

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      history.pop();
      setHistory(history);
    }
    setHistory((prevHistory) =>
      [...prevHistory, newMode]
    );
    setMode(newMode);
  };

  //taking out the history
  const back = () => {
    if (history.length > 1) {
      history.pop();
    }
    if (history.length > 0) {
      setMode(history[history.length - 1]);
    }
  };
  return { mode, transition, back };
}