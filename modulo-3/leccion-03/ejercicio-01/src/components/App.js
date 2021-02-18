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
    const filteredPromo = students.filter((student) => {
      console.log(student.promo);
      return student.promo === "A";
    });
    return filteredPromo.map((student) => (
      <div className="App">
        <ul>
          <li>
            {student.name}
            {student.age}
            {student.promo}
          </li>
        </ul>
      </div>
    ));
  }
}
export default App;
