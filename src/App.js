import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h2 class="header">Hooks Testing - 101</h2>
      <h2>Counter - {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
