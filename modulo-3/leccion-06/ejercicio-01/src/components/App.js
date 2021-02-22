import React, { useState } from "react";
import RandomInteger from "./RandomInteger";

const App = () => {
  const [number, setNumber] = useState(0);
  const generateRandomInteger = () => Math.floor(Math.random() * 100);

  const handleRandomInteger = () => {
    setNumber(generateRandomInteger());
  };

  return (
    <div className="App">
      <RandomInteger getRandom={handleRandomInteger} randomNumber={number} />
    </div>
  );
};
export default App;
