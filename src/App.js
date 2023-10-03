import React, { useReducer } from 'react';
import './style.css';
import { reducer } from './reducer.js';

export default function App() {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Hello StackBlitz! {counter}</h1>
      <button onClick={() => dispatch({ type: 'INC' })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: 'CUSTOM', payload: 10 })}>
        CUSTOM
      </button>
    </div>
  );
}
