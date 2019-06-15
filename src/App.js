import React from 'react';
import useDogs from './useDogs';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const dogImage = useDogs();
  return (
    <div className="container">
      <h2 class="header">Hooks Testing - 101</h2>
      <h2>Counter - {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>{' '}
      <hr />
      <img src={dogImage} alt="dog-images" />
    </div>
  );
}

export default App;
