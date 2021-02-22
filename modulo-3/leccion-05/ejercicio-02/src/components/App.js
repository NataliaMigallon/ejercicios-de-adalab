import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleColor = this.handleColor.bind(this);
    this.state = {
      color: "App",
    };
  }

  handleColor() {
    this.setState((prevState) => {
      let newColor;
      if (prevState.color === "App") {
        newColor = "red";
      } else {
        newColor = "App";
      }
    });
  }

  render() {
    return (
      <div
        className={`App ${this.state.color}`}
        type="color"
        onClick={this.handleColor}
      ></div>
    );
  }
}
export default App;
