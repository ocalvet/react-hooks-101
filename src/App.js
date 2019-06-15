import React, { useState, useEffect } from 'react';
import './App.css';

const useDogs = () => {
  const [dogImage, setDog] = useState(
    'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_1104.jpg'
  );
  useEffect(() => {
    console.log('Starting interval');
    const getDog = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      console.log('Got image');
      setDog(json.message);
    };
    const interval = setInterval(getDog, 1000);
    return () => {
      console.log('Cleaning interval');
      clearInterval(interval);
    };
  }, []);
  return dogImage;
};

function App() {
  const [count, setCount] = useState(0);
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
