import { useState } from 'react';

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setHistory(prev => prev.slice(0,-1));
      setHistory(prev => [...prev, newMode]);
    } else {
      setHistory(prev => [...prev, newMode]);
    }
    setMode(newMode);
  };

  const back = () => {
    if (history.length > 1) {
      const prevHistory = history.slice(0, -1);
      setHistory(prevHistory);
      setMode(prevHistory[prevHistory.length - 1]);
    }
  };

  
  return { mode, transition, back };
};