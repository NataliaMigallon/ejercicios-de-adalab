import React from "react";

class CitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.selectedCity = {
      Madrid: "Madrid.jpg",
      Valencia: "Valencia.jpg",
      Barcelona: "Barcelona.jpg",
      Sevilla: "Sevilla.jpg",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    this.CitySelector = ev.target.value;
    this.forceUpdate();
  }
  render() {
    const handleClick = this.handleClick;
    return (
      <select name="" id="" onClick={this.handleClick}>
        <option value=""></option>
        <option className="Madrid" value="Madrid">
          Madrid
        </option>
        <option className="Valencia" value="Valencia">
          Valencia
        </option>
        <option className="Barcelona" value="Barcelona">
          Barcelona
        </option>
        <option className="Sevilla" value="Sevilla">
          Sevilla
        </option>
      </select>
    );
  }
}

export default CitySelector;
