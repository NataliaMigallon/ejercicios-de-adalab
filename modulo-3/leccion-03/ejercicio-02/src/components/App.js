import React from "react";
import "../stylesheets/App.css";
import HalfPage from "./HalfPage";

function App() {
  return (
    <div className="App">
      <HalfPage left="Estoy a la IZQUIERDA">
        <h1></h1>
      </HalfPage>
      <HalfPage right="Estoy a la DERECHA">
        <h2></h2>
      </HalfPage>
    </div>
  );
}
export default App;
