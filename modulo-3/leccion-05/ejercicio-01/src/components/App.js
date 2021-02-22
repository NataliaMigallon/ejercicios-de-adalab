import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      text: "",
    };
  }

  handleInput(ev) {
    this.setState({ text: ev.target.value });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleInput} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default App;
