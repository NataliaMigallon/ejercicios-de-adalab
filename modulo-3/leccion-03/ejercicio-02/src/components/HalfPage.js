import React from "react";
import "../stylesheets/App.css";

function HalfPage(props) {
  return (
    <>
      <h1 className="text-left">{props.left}</h1>
      <h2 className="text-right">{props.right}</h2>
    </>
  );
}
export default HalfPage;
