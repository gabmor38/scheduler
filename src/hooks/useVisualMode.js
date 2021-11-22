import { useState } from "react";
  
export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

//replace = false is default more
  const transition = (newMode, replace = false) => {
  //if the newMode is not the same as the current.mode then we set a new mode
    if(newMode !== mode) {
      setMode(newMode);
    }
  //replace is true set the history to refloect that we are pushing to  current mode.
    if(replace) {
      history [history.length - 1 ] = newMode
    } else {
      history.push(newMode)
    }
    setHistory([...history]);
  }
//taking out the history (pop)
  const back = () => {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
      setHistory([ ...history ]);
    }
  }
  return { mode, transition, back };
}