import React from "react";
import CitySelector from "./CitySelector";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.srcImage = "";
    this.updateImage = this.updateImage.bind(this);
  }
  updateImage(newImage) {
    this.srcImage = newImage;
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <CitySelector updateImage={this.updateImage} />
        <img className="img" src={this.srcImage} />
      </div>
    );
  }
}
export default App;
