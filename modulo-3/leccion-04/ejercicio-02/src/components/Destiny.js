import React from "react";

class Destiny extends React.Component {
  trip(event) {
    const trip = event.currentTarget.value;
    alert(`Tu destino es viajar a ${trip}`);
  }
  render() {
    return (
      <select onChange={this.trip} name="" id="">
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Tokio">Tokio</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
      </select>
    );
  }
}
export default Destiny;
