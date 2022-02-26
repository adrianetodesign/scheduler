import { useState } from 'react';

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode])

  const transition = (newMode) => {
    setHistory(prev => [...prev, newMode]);
    setMode(newMode);
  };

  const back = () => {
    const prevHistory = history.slice(0, -1);
    setHistory(prevHistory);
    if (history.length > 1) {
      setMode(prevHistory[prevHistory.length - 1]);
    }
  };

  
  return { mode, transition, back };
};