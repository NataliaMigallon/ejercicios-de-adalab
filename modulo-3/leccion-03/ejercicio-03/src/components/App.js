import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];
    return students.map((student) => (
      <div className="App">
        <ul>
          <li>{"Nombre: " + student.name}</li>
          <li>{"Edad: " + student.age}</li>
          <li>{"Promo: " + this.props.promo}</li>
        </ul>
      </div>
    ));
  }
}
App.defaultProps = {
  promo: "No hay descripción",
};
export default App;
