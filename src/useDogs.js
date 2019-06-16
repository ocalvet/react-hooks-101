import React from 'react';

const useDogs = () => {
  const [dogImage, setDog] = React.useState(
    'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_1104.jpg'
  );
  React.useEffect(() => {
    console.log('Starting interval');
    const getDog = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      console.log('Got image');
      setDog(json.message);
    };
    const interval = setInterval(getDog, 3000);
    return () => {
      console.log('Cleaning interval');
      clearInterval(interval);
    };
  }, []);
  return dogImage;
};

export default useDogs;
