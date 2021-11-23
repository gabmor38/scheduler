import { useState } from "react";
  
export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  console.log("hist",history);
//replace = false is default more
  const transition = (newMode, replace = false) => {
  //if the newMode is not the same as the current.mode then we set a new mode
    // if(newMode !== mode) {
    //   setMode(newMode);
    // }
  //replace is true set the history to refloect that we are pushing to  current mode.
    if(replace) {
      history.pop()
      setHistory(history);
     } 
   setHistory((prevHistory)=> 
    [...prevHistory, newMode]
   )
   setMode(newMode)
  }
    
  
//taking out the history (pop)
  const back = () => {
    if (history.length > 1) {
      history.pop();
    }
    if (history.length > 0) {
      setMode(history[history.length - 1]);
    }
  }
  return { mode, transition, back };
}