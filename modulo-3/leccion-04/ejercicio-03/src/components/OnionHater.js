import React from "react";
import "../stylesheets/OnionHater.css";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.clase = "";
    this.onChangeListener = this.onChangeListener.bind(this);
  }
  onChangeListener(ev) {
    const text = ev.currentTarget.value;
    if (text.includes("cebolla ")) {
      this.clase = "red";
      this.forceUpdate();
      console.log("jajaja");
    }
  }
  render() {
    return (
      <>
        <textarea
          className={"onion " + this.clase}
          onChange={this.onChangeListener}
        ></textarea>
      </>
    );
  }
}
export default OnionHater;
