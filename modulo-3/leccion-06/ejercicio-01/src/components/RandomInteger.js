import React from "react";

const RandomInteger = (props) => {
  const getRandomNumber = function () {
    props.getRandom();
  };

  return (
    <div>
      <span>Hoy tengo 20 años de edad{props.randomNumber}</span>
      <button type="button" onClick={getRandomNumber}>
        Hazme más vieja
      </button>
    </div>
  );
};
export default RandomInteger;
