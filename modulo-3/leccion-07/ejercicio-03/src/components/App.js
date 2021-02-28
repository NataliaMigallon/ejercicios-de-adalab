import React from "react";
import Films from "./Films";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Films />
      </div>
    );
  }
}
export default App;
