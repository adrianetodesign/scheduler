import { useState } from 'react';

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode])

  function transition(newMode) {
    setHistory(prev => [...prev, newMode]);
    setMode(newMode);
  }

  function back() { /* ... */ }
  
  return { mode, transition, back };
}