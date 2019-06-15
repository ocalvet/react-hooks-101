import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(1000);
  const [dogImage, setDog] = useState(
    'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_1104.jpg'
  );
  useEffect(() => {
    console.log('Starting interval');
    const getDog = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      setDog(json.message);
    };
    const interval = setInterval(getDog, timer);
    return () => {
      console.log('Cleaning interval');
      clearInterval(interval);
    };
  }, [timer]);
  const changeTimer = event => setTimer(parseInt(event.target.value));
  return (
    <div className="container">
      <h2 class="header">Hooks Testing - 101</h2>
      <h2>Counter - {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>{' '}
      <input onChange={changeTimer} />
      {` ${timer}`}
      <hr />
      <img src={dogImage} alt="dog-images" />
    </div>
  );
}

export default App;
