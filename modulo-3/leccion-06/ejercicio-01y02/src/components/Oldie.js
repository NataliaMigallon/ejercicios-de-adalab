import React, { useState } from "react";
import "../stylesheets/App.scss";

function Oldie() {
  const [age, setAge] = useState(35);
  const handleAge = () => {
    setAge(age + 1);
  };
  const [present, setPresents] = useState(0);
  const handlePresents = () => {
    setPresents(present + 1);
  };
  return (
    <div className="page">
      <input
        type="button"
        value="Hazme más vieja"
        class="btn"
        onClick={handleAge}
      />
      <p className="age">Hoy tengo {age} años de edad</p>
      <input
        type="button"
        value="Dame regalos"
        class="btn2"
        onClick={handlePresents}
      />
      <p className="presents">Tengo {present} regalos</p>
    </div>
  );
}
export default Oldie;
