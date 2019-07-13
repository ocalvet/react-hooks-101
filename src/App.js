import React from 'react';
import useDogs from './useDogs';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const dogImage = useDogs();
  const onUpdateCount = newCounter => {
    if (newCounter >= 0) setCount(newCounter);
  };
  return (
    <div className="container">
      <h2 className="header">Hooks Testing - 101</h2>
      <h2>Counter - {count}</h2>
      <button onClick={() => onUpdateCount(count + 1)}>Increment Count</button>
      <button onClick={() => onUpdateCount(count - 1)}>
        Decrement Count
      </button>{' '}
      <hr />
      <img
        style={{ width: 250, height: 250 }}
        src={dogImage}
        alt="dog-images"
      />
      <hr />
    </div>
  );
}

export default App;
