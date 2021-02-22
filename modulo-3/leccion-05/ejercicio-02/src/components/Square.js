import React from "react";
import "../stylesheets/App.scss";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleColor = this.handleColor.bind(this);
    this.state = {
      color: "blue",
    };
  }

  handleColor() {
    this.setState((prevState) => {
      let newColor;
      if (prevState.color === "blue") {
        newColor = "red";
      } else {
        newColor = "blue";
      }
      return {
        color: newColor,
      };
    });
  }

  render() {
    return (
      <>
        <h1>Cuadrado bipolar</h1>
        <div
          className={`App ${this.state.color}`}
          type="color"
          onClick={this.handleColor}
        ></div>
      </>
    );
  }
}
export default Square;
