import React from "react";
import "../stylesheets/App.scss";
import Food from "./Food";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = [
      {
        name: "Cereales con chocolate",
        description: "Cereales rellenos de chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5,
      },
      {
        name: "Hamburguesa con queso",
        description: "Hamburguesa rica y saludable",
        quantity: 1,
        category: "Fast-food",
        price: 15,
      },
      {
        name: "Agua mineral",
        description: "Agua de un charco del Himalaya",
        quantity: 2,
        category: "Bebida",
        price: 5,
      },
    ];
    return (
      <div className="page">
        <h1>Pintar listados con React:</h1>
        {items.map((item) => {
          return (
            <Food
              name={item.name}
              description={item.description}
              quantity={item.quantity}
              category={item.category}
              price={item.price}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
