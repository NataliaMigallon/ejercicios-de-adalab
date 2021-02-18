import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const onChangeListener = (ev) => {
      const text = ev.currentTarget.value;
      if (text.includes("cebolla ")) {
        alert("Odio la cebolla");
      }
    };
    return (
      <>
        <textarea placeholder="" onChange={onChangeListener}></textarea>
      </>
    );
  }
}
export default OnionHater;
